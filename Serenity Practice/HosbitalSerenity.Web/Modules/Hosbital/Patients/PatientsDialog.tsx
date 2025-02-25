import { Authorization, Decorators, EntityDialog } from '@serenity-is/corelib';
import { PatientsForm, PatientsRow, PatientsService } from '../../ServerTypes/Hosbital';
import * as Q from "@serenity-is/corelib";
import { HospitalPermissionKeys } from '../../ServerTypes/Modules/Hosbital.HospitalPermissionKeys';
import { SiteValidationTexts } from '../../ServerTypes/Texts';
import { Gender } from '../../ServerTypes/Modules';
import { isArray } from '@serenity-is/corelib';


@Decorators.registerClass('HosbitalSerenity.Hosbital.PatientsDialog')
export class PatientsDialog extends EntityDialog<PatientsRow, any> {
    protected getFormKey() { return PatientsForm.formKey; }
    protected getRowDefinition() { return PatientsRow; }
    protected getService() { return PatientsService.baseUrl; }

    protected form = new PatientsForm(this.idPrefix);


    constructor() {
        super();

        this.form.Gender.changeSelect2(e => this.addClassReq());
        this.form.Cost.change(e => this.updateTotalCost());
        this.form.LoyalityYears.change(e => this.updateTotalCost());
    }

    protected addClassReq() {
        if (this.form.Gender.value == Q.toId(Gender.Male)) {
            this.form.Address.element.closest('.field').show();
            this.form.Address.element.addClass("required");
            //this.form.Address.element.attr("required");
        } else {
            this.form.Address.element.closest('.field').hide();
            this.form.Address.element.removeClass("required");
        }
    }

    protected addDisabledOption() {
        this.form.Gender.items.forEach(function (item) {
            if (item.id == Q.toId(Gender.Other)) {
                item.disabled = true;
            }
        });
    }

    protected afterLoadEntity() {
        super.afterLoadEntity();
        this.addClassReq();
        this.addDisabledOption();

        if (this.isNew()) {
            console.log("This is a new patient, no button added.");
            this.toolbar.findButton("btn-warning").hide();
            this.toolbar.findButton("readonly-button").hide();
        } else {
            console.log("This is an existing patient, adding the Multiply Cost button.");
        }
    }



    protected getToolbarButtons() {
        var buttons = super.getToolbarButtons();

        if (Authorization.hasPermission(HospitalPermissionKeys.Patient.Multiply)) {
            buttons.push({
                title: 'Multiply Cost',
                icon: "fa fa-calculator",
                cssClass: 'btn-warning',
                onClick: () => this.multiplyCost()
            });
        }

        let isReadOnly = false;
        buttons.push({
            title: "Read Only",
            icon: "fa-eye",
            cssClass: 'readonly-button',
            onClick: () => {
                isReadOnly = !isReadOnly;
                this.updateButtonIcon(isReadOnly); // Ensure this method exists
                this.enableReadonly(isReadOnly);
            }
        });

        return buttons;
    }


    protected updateButtonIcon(isReadOnly: boolean) {
        isReadOnly ? this.element.findFirst('.fa-eye').removeClass('fa-eye').addClass('fa-eye-slash') :
            this.element.findFirst('.fa-eye-slash').removeClass('fa-eye-slash').addClass('fa-eye');
    }


    private enableReadonly(mode: boolean) {
        Q.setElementReadOnly(this.element.findAll('.editor'), mode);
        this.form.TotalCost.element.attr('readonly', true).addClass('readonly')

        //Q.setElementReadOnly(this.element.findAll('.editor'), true);


        //this.element.findAll('.editor').map(fld => {
        //    fld.classList.toggle('readonly');
        //});
        //this.element.findAll('.tool-button').map(fld => {
        //    fld.classList.toggle('disabled');
        //});
    }

    private updateTotalCost() {
        let cost = this.form.Cost.value || 0;
        let loyaltyYears = this.form.LoyalityYears.value || 0;

        let totalCost = cost * loyaltyYears;
        this.form.TotalCost.value = totalCost;
    }

    private multiplyCost() {
        let currentCost = this.form.Cost.value;
        if (currentCost == null) {
            Q.notifyError("Cost value is missing!");
            return;
        }

        //Q.prompt("Enter the multiplier:", "2", value => {
        //    let multiplier = parseFloat(value);
        //    if (isNaN(multiplier) || multiplier <= 0) {
        //        Q.notifyError("Invalid multiplier value!");
        //        return;
        //    }

        let newCost = currentCost * 2;

        Q.confirm(`Are you sure you want to update Cost to ${newCost}?`, () => {
            PatientsService.Update({
                EntityId: this.entityId,
                Entity: { Cost: newCost }
            }, response => {
                Q.notifySuccess("Cost updated successfully!");
                this.form.Cost.value = newCost;
                //this.loadResponse(response);
                this.reloadById();
            });
        });
    }

    protected validateBeforeSave() {
        if (!super.validateBeforeSave()) return false;

        let cost = this.form.Cost.value || 0;
        if (cost <= 0) {
            Q.notifyError(SiteValidationTexts.CostGreaterThanZero);
            return false;
        }

        let loyaltyYears = this.form.LoyalityYears.value || 0;
        if (loyaltyYears < 0) {
            Q.notifyError(SiteValidationTexts.LoyaltyYearsNonNegative);
            return false;
        }

        return true;
    }

}


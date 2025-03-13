import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { PatientsColumns, PatientsRow, PatientsService } from '../../ServerTypes/Hosbital';
import { PatientsDialog } from './PatientsDialog';
import { localText } from '@serenity-is/corelib';
import * as Q from "@serenity-is/corelib";
import "./PatientsGrid.css";
import jQuery from 'jquery';
import { Gender } from '../../ServerTypes/Modules';

@Decorators.registerClass('HosbitalSerenity.Hosbital.PatientsGrid')
export class PatientsGrid extends EntityGrid<PatientsRow> {
    protected getColumnsKey() { return PatientsColumns.columnsKey; }
    protected getDialogType() { return PatientsDialog; }
    protected getRowDefinition() { return PatientsRow; }
    protected getService() { return PatientsService.baseUrl; }

    private pendingChanges: Q.Dictionary<any> = {};
    constructor(container: JQuery) {
        super(container);

        this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
    }

    protected getQuickSearchFields(): QuickSearchField[] {
        const txt = s => localText(`Db.${PatientsRow.localTextPrefix}.${s}`);
        const flds = PatientsRow.Fields;

        return [
            { name: "", title: "All" },
            { name: flds.PatientName, title: txt(flds.PatientName) },
            { name: flds.Age, title: txt(flds.Age) },
            { name: flds.GovName, title: txt(flds.GovName) },
            { name: flds.CityName, title: txt(flds.CityName) }
        ];
    }

    protected getItemCssClass(item: PatientsRow, index: number): string {
        var klass: string = "";
        if (item.Gender == 1)
            klass += "male-patient";
        else
            klass += "female-patient";

        return Q.trimToNull(klass);
    }

    protected createToolbarExtensions() {
        super.createToolbarExtensions();

        let tabs = jQuery('<div class="custom-tabs-container"/>');
        let tabsUl = jQuery('<ul class="nav"/>').appendTo(tabs);

        this.addTab(tabsUl, 'AllPatients', 'All Patients');
        this.addTab(tabsUl, 'MalePatients', 'Male Patients');
        this.addTab(tabsUl, 'FemalePatients', 'Female Patients');

        tabsUl.on('click', 'li a', (e) => {
            e.preventDefault();
            let tab = jQuery(e.target).attr('href')?.substring(1);
            if (tab) {
                this.handleTabChange(tab);
                tabsUl.find('li').removeClass('active');
                jQuery(e.target).parent().addClass('active');
            }
        });

        tabsUl.find('li:first').addClass('active');

        tabs.appendTo(this.toolbar.element);
    }

    private addTab(tabsUl: JQuery, id: string, title: string) {
        jQuery('<li/>').append(
            jQuery('<a/>')
                .attr('href', '#' + id)
                .text(title)
        ).appendTo(tabsUl);
    }


    private handleTabChange(tab: string) {
        const request = this.view.params as Q.ListRequest;
        request.EqualityFilter = request.EqualityFilter || {};

        switch (tab) {
            case 'MalePatients':
                request.EqualityFilter['Gender'] = Gender.Male;
                break;
            case 'FemalePatients':
                request.EqualityFilter['Gender'] = Gender.Female;
                break;
            default:
                delete request.EqualityFilter['Gender'];
                break;
        }

        this.refresh();
    }

    protected getButtons() {
        var buttons = super.getButtons();
        //buttons.splice(0, 1);

        buttons.push({
            title: Q.text('Site.Translation.SaveChangesButton'),
            cssClass: 'apply-changes-button disabled',
            onClick: e => this.saveClick(),
            //separator: true
        });
        return buttons;
    }

    protected getColumns() {
        var columns = super.getColumns();

        columns.unshift({
            field: "Q.text('Controls.EntityDialog.DeleteButton')",
            name: '',
            format: ctx => '<a class="inline-action delete-row" title="delete">' +
                '<i class="fa fa-trash-o text-danger"></i></a>',
            width: 20,
        });

        var patientInput = ctx => this.stringInputFormatter(ctx);

        //Q.first(columns, x => x.field == PatientsRow.Fields.PatientName).format = patientInput;
        Q.first(columns, x => x.field == PatientsRow.Fields.Cost).format = patientInput;
        Q.first(columns, x => x.field == PatientsRow.Fields.LoyalityYears).format = patientInput;

        return columns;
    }

    protected onClick(e: JQueryEventObject, row: number, cell: number) {
        super.onClick(e, row, cell);

        var item = this.itemAt(row);
        var target = $(e.target);

        if (target.parent().hasClass('inline-action'))
            target = target.parent();

        if (target.hasClass('inline-action')) {
            e.preventDefault();

            if (target.hasClass('delete-row')) {
                Q.confirm("Are you sure you want to delete this record?", () => {
                    var items = this.getItems();

                    if (!item || !item.PatientId) {
                        Q.notifyError("Invalid record selected for deletion.");
                        return;
                    }

                    new Promise((resolve, reject) => {
                        PatientsService.Delete({
                            EntityId: item.PatientId
                        }, (response) => {
                            items.splice(row, 1);
                            this.setItems(items);
                            Q.notifySuccess("Record deleted successfully.");
                            resolve(response);
                        }, {
                            onError: () => reject("Failed to delete record."),
                        });
                    });

                });
            }
        }
    }

    private stringInputFormatter(ctx) {

        var klass = 'edit string';
        var item = ctx.item as PatientsRow;
        var pending = this.pendingChanges[item.PatientId];


        if (pending && pending[ctx.column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, ctx.column.field) as string;

        return "<input type='text' style='width: 100%; background-color: #fff; color: #000;' class='" + klass +
            "' data-field='" + ctx.column.field +
            "' value='" + Q.htmlEncode(value) +
            "' maxlength='" + ctx.column.sourceItem.maxLength + "'/>";
    }

    private getEffectiveValue(item, field): any {

        var change = this.pendingChanges[item.PatientId];

        if (change && change[field] !== undefined) {
            return change[field];
        }

        return item[field];
    }

    private inputsChange(e: JQueryEventObject) {

        var cell = this.slickGrid.getCellFromEvent(e);
        var item = this.itemAt(cell.row);
        var input = $(e.target);
        var field = input.data('field');
        var text = Q.trimToNull(input.val());
        var pending = this.pendingChanges[item.PatientId];

        var effective = this.getEffectiveValue(item, field);
        var oldText: string;

        oldText = effective as string;


        var value;
        value = text;
        if (!pending) {
            this.pendingChanges[item.PatientId] = pending = {};
        }

        pending[field] = value;
        item[field] = value;

        input.val(value).addClass('dirty');

        this.setSaveButtonState();
        //this.saveClick();
    }

    private setSaveButtonState() {
        this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
            Object.keys(this.pendingChanges).length === 0);
    }

    private saveClick() {
        if (Object.keys(this.pendingChanges).length === 0) {
            return;
        }
        var keys = Object.keys(this.pendingChanges);
        var current = -1;
        var self = this;

        (function saveNext() {
            if (++current >= keys.length) {
                self.refresh();
                self.setSaveButtonState();
                $(".dirty").removeClass('dirty');
                Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                return;
            }

            var key = keys[current];
            var entity = Q.deepClone(self.pendingChanges[key]);
            entity.PatientId = key;
            Q.serviceRequest(PatientsService.Methods.Update, {
                EntityId: key,
                Entity: entity
            }, (response) => {
                delete self.pendingChanges[key];
                saveNext();
            });
        })();

    }

}
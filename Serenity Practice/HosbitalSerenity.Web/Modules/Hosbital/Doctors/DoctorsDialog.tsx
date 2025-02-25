import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { DoctorsForm, DoctorsRow, DoctorsService } from '../../ServerTypes/Hosbital';
import "./DoctorsDialog.css";

@Decorators.registerClass('HosbitalSerenity.Hosbital.DoctorsDialog')
export class DoctorsDialog extends EntityDialog<DoctorsRow, any> {
    protected getFormKey() { return DoctorsForm.formKey; }
    protected getRowDefinition() { return DoctorsRow; }
    protected getService() { return DoctorsService.baseUrl; }

    protected form = new DoctorsForm(this.idPrefix);
    constructor() {
        super();

        console.log("Hello constructor!!!");
    }

    protected afterLoadEntity() {
        super.afterLoadEntity();

    }


}
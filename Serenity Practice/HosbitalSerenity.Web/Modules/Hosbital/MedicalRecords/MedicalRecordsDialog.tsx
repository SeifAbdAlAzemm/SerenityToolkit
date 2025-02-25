import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { MedicalRecordsForm, MedicalRecordsRow, MedicalRecordsService } from '../../ServerTypes/Hosbital';
import "./MedicalRecordsDialog.css"

@Decorators.registerClass('HosbitalSerenity.Hosbital.MedicalRecordsDialog')
export class MedicalRecordsDialog extends EntityDialog<MedicalRecordsRow, any> {
    protected getFormKey() { return MedicalRecordsForm.formKey; }
    protected getRowDefinition() { return MedicalRecordsRow; }
    protected getService() { return MedicalRecordsService.baseUrl; }

    protected form = new MedicalRecordsForm(this.idPrefix);

    protected afterLoadEntity() {
        super.afterLoadEntity();

        //this.form.PatientId.filterField = "Gender";
        //this.form.PatientId.filterValue = "1";
    }
}
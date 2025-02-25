import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { DoctorSpecialitiesForm, DoctorSpecialitiesRow, DoctorSpecialitiesService } from '../../ServerTypes/Hosbital';

@Decorators.registerClass('HosbitalSerenity.Hosbital.DoctorSpecialitiesDialog')
export class DoctorSpecialitiesDialog extends EntityDialog<DoctorSpecialitiesRow, any> {
    protected getFormKey() { return DoctorSpecialitiesForm.formKey; }
    protected getRowDefinition() { return DoctorSpecialitiesRow; }
    protected getService() { return DoctorSpecialitiesService.baseUrl; }

    protected form = new DoctorSpecialitiesForm(this.idPrefix);
}
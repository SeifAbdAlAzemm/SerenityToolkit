import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { CityForm, CityRow, CityService } from '../../ServerTypes/Default';

@Decorators.registerClass('HosbitalSerenity.Default.CityDialog')
export class CityDialog extends EntityDialog<CityRow, any> {
    protected getFormKey() { return CityForm.formKey; }
    protected getRowDefinition() { return CityRow; }
    protected getService() { return CityService.baseUrl; }

    protected form = new CityForm(this.idPrefix);
}
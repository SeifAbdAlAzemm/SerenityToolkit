import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GovernorateForm, GovernorateRow, GovernorateService } from '../../ServerTypes/Default';

@Decorators.registerClass('HosbitalSerenity.Default.GovernorateDialog')
export class GovernorateDialog extends EntityDialog<GovernorateRow, any> {
    protected getFormKey() { return GovernorateForm.formKey; }
    protected getRowDefinition() { return GovernorateRow; }
    protected getService() { return GovernorateService.baseUrl; }

    protected form = new GovernorateForm(this.idPrefix);
}
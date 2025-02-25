import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GovernorateColumns, GovernorateRow, GovernorateService } from '../../ServerTypes/Default';
import { GovernorateDialog } from './GovernorateDialog';

@Decorators.registerClass('HosbitalSerenity.Default.GovernorateGrid')
export class GovernorateGrid extends EntityGrid<GovernorateRow> {
    protected getColumnsKey() { return GovernorateColumns.columnsKey; }
    protected getDialogType() { return GovernorateDialog; }
    protected getRowDefinition() { return GovernorateRow; }
    protected getService() { return GovernorateService.baseUrl; }
}
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CityColumns, CityRow, CityService } from '../../ServerTypes/Default';
import { CityDialog } from './CityDialog';

@Decorators.registerClass('HosbitalSerenity.Default.CityGrid')
export class CityGrid extends EntityGrid<CityRow> {
    protected getColumnsKey() { return CityColumns.columnsKey; }
    protected getDialogType() { return CityDialog; }
    protected getRowDefinition() { return CityRow; }
    protected getService() { return CityService.baseUrl; }
}
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { SpecialityColumns, SpecialityRow, SpecialityService } from '../../ServerTypes/Hosbital';
import { SpecialityDialog } from './SpecialityDialog';

@Decorators.registerClass('HosbitalSerenity.Hosbital.SpecialityGrid')
export class SpecialityGrid extends EntityGrid<SpecialityRow> {
    protected getColumnsKey() { return SpecialityColumns.columnsKey; }
    protected getDialogType() { return SpecialityDialog; }
    protected getRowDefinition() { return SpecialityRow; }
    protected getService() { return SpecialityService.baseUrl; }
}
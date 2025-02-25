import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { DoctorSpecialitiesColumns, DoctorSpecialitiesRow, DoctorSpecialitiesService } from '../../ServerTypes/Hosbital';
import { DoctorSpecialitiesDialog } from './DoctorSpecialitiesDialog';

@Decorators.registerClass('HosbitalSerenity.Hosbital.DoctorSpecialitiesGrid')
export class DoctorSpecialitiesGrid extends EntityGrid<DoctorSpecialitiesRow> {
    protected getColumnsKey() { return DoctorSpecialitiesColumns.columnsKey; }
    protected getDialogType() { return DoctorSpecialitiesDialog; }
    protected getRowDefinition() { return DoctorSpecialitiesRow; }
    protected getService() { return DoctorSpecialitiesService.baseUrl; }
}
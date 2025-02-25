import { Decorators, EntityGrid, first, LookupEditor } from '@serenity-is/corelib';
import { DoctorsColumns, DoctorsRow, DoctorsService } from '../../ServerTypes/Hosbital';
import { DoctorsDialog } from './DoctorsDialog';
import { SpecialityListRequest } from '../../ServerTypes/Modules';

@Decorators.registerClass('HosbitalSerenity.Hosbital.DoctorsGrid')
export class DoctorsGrid extends EntityGrid<DoctorsRow> {
    protected getColumnsKey() { return DoctorsColumns.columnsKey; }
    protected getDialogType() { return DoctorsDialog; }
    protected getRowDefinition() { return DoctorsRow; }
    protected getService() { return DoctorsService.baseUrl; }

    protected getQuickFilters() {
        let items = super.getQuickFilters();

        const SpecialityListFilter = first(items, x =>
            x.field == DoctorsRow.Fields.SpecialityList);

        SpecialityListFilter.handler = h => {
            const request = (h.request as SpecialityListRequest);
            const values = (h.widget as LookupEditor).values;
            request.Specialities = values.map(x => parseInt(x, 10));
            h.handled = true;
        };

        return items;
    }
}
import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { MedicalRecordsColumns, MedicalRecordsRow, MedicalRecordsService } from '../../ServerTypes/Hosbital';
import { MedicalRecordsDialog } from './MedicalRecordsDialog';
import { localText } from '@serenity-is/corelib';

@Decorators.registerClass('HosbitalSerenity.Hosbital.MedicalRecordsGrid')
export class MedicalRecordsGrid extends EntityGrid<MedicalRecordsRow> {
    protected getColumnsKey() { return MedicalRecordsColumns.columnsKey; }
    protected getDialogType() { return MedicalRecordsDialog; }
    protected getRowDefinition() { return MedicalRecordsRow; }
    protected getService() { return MedicalRecordsService.baseUrl; }

    protected getQuickSearchFields(): QuickSearchField[] {
        const txt = s => localText(`Db.${MedicalRecordsRow.localTextPrefix}.${s}`);
        const flds = MedicalRecordsRow.Fields;

        return [
            { name: "", title: "All" },
            { name: flds.DoctorName, title: txt(flds.DoctorName) },
            { name: flds.PatientName, title: txt(flds.PatientName) },
            { name: flds.Notes, title: txt(flds.Notes) }
        ];
    }
}
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MedicalRecordsRow } from "./MedicalRecordsRow";

export interface MedicalRecordsColumns {
    RecordId: Column<MedicalRecordsRow>;
    DoctorName: Column<MedicalRecordsRow>;
    PatientName: Column<MedicalRecordsRow>;
    RecordDate: Column<MedicalRecordsRow>;
    Notes: Column<MedicalRecordsRow>;
}

export class MedicalRecordsColumns extends ColumnsBase<MedicalRecordsRow> {
    static readonly columnsKey = 'Hosbital.MedicalRecords';
    static readonly Fields = fieldsProxy<MedicalRecordsColumns>();
}
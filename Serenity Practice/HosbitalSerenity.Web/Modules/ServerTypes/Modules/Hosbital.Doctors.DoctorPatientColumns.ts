import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MedicalRecordsRow } from "../Hosbital/MedicalRecordsRow";

export interface DoctorPatientColumns {
    PatientName: Column<MedicalRecordsRow>;
    Notes: Column<MedicalRecordsRow>;
}

export class DoctorPatientColumns extends ColumnsBase<MedicalRecordsRow> {
    static readonly columnsKey = 'HosbitalSerenity.Modules.Hosbital.Doctors.DoctorPatientColumns';
    static readonly Fields = fieldsProxy<DoctorPatientColumns>();
}
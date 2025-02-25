import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SpecialityListFormatter } from "../../Hosbital/Doctors/SpecialityListFormatter";
import { DoctorsRow } from "./DoctorsRow";

export interface DoctorsColumns {
    DoctorId: Column<DoctorsRow>;
    DoctorName: Column<DoctorsRow>;
    SpecialityList: Column<DoctorsRow>;
}

export class DoctorsColumns extends ColumnsBase<DoctorsRow> {
    static readonly columnsKey = 'Hosbital.Doctors';
    static readonly Fields = fieldsProxy<DoctorsColumns>();
}

[SpecialityListFormatter]; // referenced types
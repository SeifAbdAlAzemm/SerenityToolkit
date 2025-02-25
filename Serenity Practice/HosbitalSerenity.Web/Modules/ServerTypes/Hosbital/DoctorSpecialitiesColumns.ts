import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { DoctorSpecialitiesRow } from "./DoctorSpecialitiesRow";

export interface DoctorSpecialitiesColumns {
    DoctorSpecialityId: Column<DoctorSpecialitiesRow>;
    DoctorName: Column<DoctorSpecialitiesRow>;
    SpecialityName: Column<DoctorSpecialitiesRow>;
}

export class DoctorSpecialitiesColumns extends ColumnsBase<DoctorSpecialitiesRow> {
    static readonly columnsKey = 'Hosbital.DoctorSpecialities';
    static readonly Fields = fieldsProxy<DoctorSpecialitiesColumns>();
}
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { Gender } from "../Modules/Hosbital.Patients.Gender";
import { PatientsRow } from "./PatientsRow";

export interface PatientsColumns {
    PatientId: Column<PatientsRow>;
    PatientName: Column<PatientsRow>;
    DateOfBirth: Column<PatientsRow>;
    Gender: Column<PatientsRow>;
    Address: Column<PatientsRow>;
    Age: Column<PatientsRow>;
    GovName: Column<PatientsRow>;
    CityName: Column<PatientsRow>;
    Cost: Column<PatientsRow>;
    LoyalityYears: Column<PatientsRow>;
    TotalCost: Column<PatientsRow>;
}

export class PatientsColumns extends ColumnsBase<PatientsRow> {
    static readonly columnsKey = 'Hosbital.Patients';
    static readonly Fields = fieldsProxy<PatientsColumns>();
}

[Gender]; // referenced types
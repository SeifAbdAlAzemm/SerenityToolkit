import { fieldsProxy } from "@serenity-is/corelib";
import { Gender } from "../Modules/Hosbital.Patients.Gender";

export interface PatientsRow {
    PatientId?: number;
    PatientName?: string;
    DateOfBirth?: string;
    Gender?: Gender;
    Address?: string;
    Age?: number;
    Cost?: number;
    LoyalityYears?: number;
    TotalCost?: number;
    govId?: number;
    GovName?: string;
    cityId?: number;
    CityName?: string;
}

export abstract class PatientsRow {
    static readonly idProperty = 'PatientId';
    static readonly nameProperty = 'PatientName';
    static readonly localTextPrefix = 'Hosbital.Patients';
    static readonly deletePermission = 'Hospitals:Patient:Delete';
    static readonly insertPermission = 'Hospitals:Patient:Modify';
    static readonly readPermission = 'Hospitals:Patient:View';
    static readonly updatePermission = 'Hospitals:Patient:Modify';

    static readonly Fields = fieldsProxy<PatientsRow>();
}
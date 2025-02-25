import { fieldsProxy } from "@serenity-is/corelib";

export interface MedicalRecordsRow {
    RecordId?: number;
    DoctorId?: number;
    PatientId?: number;
    RecordDate?: string;
    Notes?: string;
    DoctorName?: string;
    PatientName?: string;
}

export abstract class MedicalRecordsRow {
    static readonly idProperty = 'RecordId';
    static readonly nameProperty = 'Notes';
    static readonly localTextPrefix = 'Hosbital.MedicalRecords';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<MedicalRecordsRow>();
}
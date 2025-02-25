import { fieldsProxy } from "@serenity-is/corelib";

export interface DoctorSpecialitiesRow {
    DoctorSpecialityId?: number;
    DoctorId?: number;
    SpecialityId?: number;
    DoctorName?: string;
    SpecialityName?: string;
}

export abstract class DoctorSpecialitiesRow {
    static readonly idProperty = 'DoctorSpecialityId';
    static readonly localTextPrefix = 'Hosbital.DoctorSpecialities';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<DoctorSpecialitiesRow>();
}
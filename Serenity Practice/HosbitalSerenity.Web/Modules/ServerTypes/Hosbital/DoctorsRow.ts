import { fieldsProxy } from "@serenity-is/corelib";

export interface DoctorsRow {
    DoctorId?: number;
    DoctorName?: string;
    SpecialityList?: number[];
    ProfilePicture?: string;
    Documents?: string;
}

export abstract class DoctorsRow {
    static readonly idProperty = 'DoctorId';
    static readonly nameProperty = 'DoctorName';
    static readonly localTextPrefix = 'Hosbital.Doctors';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<DoctorsRow>();
}
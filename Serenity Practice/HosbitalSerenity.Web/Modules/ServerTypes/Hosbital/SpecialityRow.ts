import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface SpecialityRow {
    SpecialityId?: number;
    SpecialityName?: string;
}

export abstract class SpecialityRow {
    static readonly idProperty = 'SpecialityId';
    static readonly nameProperty = 'SpecialityName';
    static readonly localTextPrefix = 'Hosbital.Speciality';
    static readonly lookupKey = 'Hosbital.Speciality';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<SpecialityRow>('Hosbital.Speciality') }
    static async getLookupAsync() { return getLookupAsync<SpecialityRow>('Hosbital.Speciality') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SpecialityRow>();
}
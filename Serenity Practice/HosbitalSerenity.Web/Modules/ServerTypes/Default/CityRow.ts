import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface CityRow {
    CityId?: number;
    CityName?: string;
    GovId?: number;
    GovName?: string;
}

export abstract class CityRow {
    static readonly idProperty = 'CityId';
    static readonly nameProperty = 'CityName';
    static readonly localTextPrefix = 'Default.City';
    static readonly lookupKey = 'Default.City';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CityRow>('Default.City') }
    static async getLookupAsync() { return getLookupAsync<CityRow>('Default.City') }

    static readonly deletePermission = '?';
    static readonly insertPermission = '?';
    static readonly readPermission = '?';
    static readonly updatePermission = '?';

    static readonly Fields = fieldsProxy<CityRow>();
}
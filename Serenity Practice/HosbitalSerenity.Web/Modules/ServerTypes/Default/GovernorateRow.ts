import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface GovernorateRow {
    GovId?: number;
    GovName?: string;
}

export abstract class GovernorateRow {
    static readonly idProperty = 'GovId';
    static readonly nameProperty = 'GovName';
    static readonly localTextPrefix = 'Default.Governorate';
    static readonly lookupKey = 'Default.Governorate';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<GovernorateRow>('Default.Governorate') }
    static async getLookupAsync() { return getLookupAsync<GovernorateRow>('Default.Governorate') }

    static readonly deletePermission = '?';
    static readonly insertPermission = '?';
    static readonly readPermission = '?';
    static readonly updatePermission = '?';

    static readonly Fields = fieldsProxy<GovernorateRow>();
}
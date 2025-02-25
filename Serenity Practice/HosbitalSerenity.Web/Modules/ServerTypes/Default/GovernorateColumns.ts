import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { GovernorateRow } from "./GovernorateRow";

export interface GovernorateColumns {
    GovId: Column<GovernorateRow>;
    GovName: Column<GovernorateRow>;
}

export class GovernorateColumns extends ColumnsBase<GovernorateRow> {
    static readonly columnsKey = 'Default.Governorate';
    static readonly Fields = fieldsProxy<GovernorateColumns>();
}
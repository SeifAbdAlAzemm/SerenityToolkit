import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CityRow } from "./CityRow";

export interface CityColumns {
    CityId: Column<CityRow>;
    CityName: Column<CityRow>;
    GovName: Column<CityRow>;
}

export class CityColumns extends ColumnsBase<CityRow> {
    static readonly columnsKey = 'Default.City';
    static readonly Fields = fieldsProxy<CityColumns>();
}
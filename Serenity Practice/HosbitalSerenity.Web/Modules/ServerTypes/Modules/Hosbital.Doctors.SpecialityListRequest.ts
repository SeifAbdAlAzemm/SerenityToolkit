import { ListRequest } from "@serenity-is/corelib";

export interface SpecialityListRequest extends ListRequest {
    Specialities?: number[];
}
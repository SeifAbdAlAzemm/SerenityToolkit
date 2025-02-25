import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { GovernorateRow } from "./GovernorateRow";

export namespace GovernorateService {
    export const baseUrl = 'Default/Governorate';

    export declare function Create(request: SaveRequest<GovernorateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<GovernorateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<GovernorateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<GovernorateRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<GovernorateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<GovernorateRow>>;

    export const Methods = {
        Create: "Default/Governorate/Create",
        Update: "Default/Governorate/Update",
        Delete: "Default/Governorate/Delete",
        Retrieve: "Default/Governorate/Retrieve",
        List: "Default/Governorate/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>GovernorateService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
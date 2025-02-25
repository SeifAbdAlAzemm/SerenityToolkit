import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { CityRow } from "./CityRow";

export namespace CityService {
    export const baseUrl = 'Default/City';

    export declare function Create(request: SaveRequest<CityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<CityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<CityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<CityRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<CityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<CityRow>>;

    export const Methods = {
        Create: "Default/City/Create",
        Update: "Default/City/Update",
        Delete: "Default/City/Delete",
        Retrieve: "Default/City/Retrieve",
        List: "Default/City/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>CityService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { SpecialityRow } from "./SpecialityRow";

export namespace SpecialityService {
    export const baseUrl = 'Hosbital/Speciality';

    export declare function Create(request: SaveRequest<SpecialityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SpecialityRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SpecialityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SpecialityRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SpecialityRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SpecialityRow>>;

    export const Methods = {
        Create: "Hosbital/Speciality/Create",
        Update: "Hosbital/Speciality/Update",
        Delete: "Hosbital/Speciality/Delete",
        Retrieve: "Hosbital/Speciality/Retrieve",
        List: "Hosbital/Speciality/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>SpecialityService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
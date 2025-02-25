import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { DoctorSpecialitiesRow } from "./DoctorSpecialitiesRow";

export namespace DoctorSpecialitiesService {
    export const baseUrl = 'Hosbital/DoctorSpecialities';

    export declare function Create(request: SaveRequest<DoctorSpecialitiesRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DoctorSpecialitiesRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DoctorSpecialitiesRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DoctorSpecialitiesRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<DoctorSpecialitiesRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DoctorSpecialitiesRow>>;

    export const Methods = {
        Create: "Hosbital/DoctorSpecialities/Create",
        Update: "Hosbital/DoctorSpecialities/Update",
        Delete: "Hosbital/DoctorSpecialities/Delete",
        Retrieve: "Hosbital/DoctorSpecialities/Retrieve",
        List: "Hosbital/DoctorSpecialities/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>DoctorSpecialitiesService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { SpecialityListRequest } from "../Modules/Hosbital.Doctors.SpecialityListRequest";
import { DoctorsRow } from "./DoctorsRow";

export namespace DoctorsService {
    export const baseUrl = 'Hosbital/Doctors';

    export declare function Create(request: SaveRequest<DoctorsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DoctorsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DoctorsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DoctorsRow>>;
    export declare function List(request: SpecialityListRequest, onSuccess?: (response: ListResponse<DoctorsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DoctorsRow>>;

    export const Methods = {
        Create: "Hosbital/Doctors/Create",
        Update: "Hosbital/Doctors/Update",
        Delete: "Hosbital/Doctors/Delete",
        Retrieve: "Hosbital/Doctors/Retrieve",
        List: "Hosbital/Doctors/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>DoctorsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
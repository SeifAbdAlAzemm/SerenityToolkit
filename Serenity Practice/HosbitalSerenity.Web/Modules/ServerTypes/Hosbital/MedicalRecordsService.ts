import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { MedicalRecordsRow } from "./MedicalRecordsRow";

export namespace MedicalRecordsService {
    export const baseUrl = 'Hosbital/MedicalRecords';

    export declare function Create(request: SaveRequest<MedicalRecordsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<MedicalRecordsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<MedicalRecordsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<MedicalRecordsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<MedicalRecordsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<MedicalRecordsRow>>;

    export const Methods = {
        Create: "Hosbital/MedicalRecords/Create",
        Update: "Hosbital/MedicalRecords/Update",
        Delete: "Hosbital/MedicalRecords/Delete",
        Retrieve: "Hosbital/MedicalRecords/Retrieve",
        List: "Hosbital/MedicalRecords/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>MedicalRecordsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
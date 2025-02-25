import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { PatientsRow } from "./PatientsRow";

export namespace PatientsService {
    export const baseUrl = 'Hosbital/Patients';

    export declare function Create(request: SaveRequest<PatientsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<PatientsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<PatientsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<PatientsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<PatientsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PatientsRow>>;
    export declare function MalePatientsList(request: ListRequest, onSuccess?: (response: ListResponse<PatientsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PatientsRow>>;
    export declare function FemalePatientsList(request: ListRequest, onSuccess?: (response: ListResponse<PatientsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<PatientsRow>>;

    export const Methods = {
        Create: "Hosbital/Patients/Create",
        Update: "Hosbital/Patients/Update",
        Delete: "Hosbital/Patients/Delete",
        Retrieve: "Hosbital/Patients/Retrieve",
        List: "Hosbital/Patients/List",
        MalePatientsList: "Hosbital/Patients/MalePatientsList",
        FemalePatientsList: "Hosbital/Patients/FemalePatientsList"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'MalePatientsList', 
        'FemalePatientsList'
    ].forEach(x => {
        (<any>PatientsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}
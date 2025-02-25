import { ServiceRequest } from "@serenity-is/corelib";

export interface ImpersonateRequest extends ServiceRequest {
    UserId?: number;
}
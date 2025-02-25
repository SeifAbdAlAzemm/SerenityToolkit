import { Decorators } from "@serenity-is/corelib";

export enum Gender {
    Male = 1,
    Female = 2,
    Other = 3
}
Decorators.registerEnumType(Gender, 'HosbitalSerenity.Modules.Hosbital.Patients.Gender', 'Hosbital.Gender');
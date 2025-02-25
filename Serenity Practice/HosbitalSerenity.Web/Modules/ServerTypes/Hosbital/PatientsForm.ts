import { StringEditor, DateEditor, EnumEditor, LookupEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CityDialog } from "../../Default/City/CityDialog";
import { GovernorateDialog } from "../../Default/Governorate/GovernorateDialog";
import { Gender } from "../Modules/Hosbital.Patients.Gender";

export interface PatientsForm {
    PatientName: StringEditor;
    DateOfBirth: DateEditor;
    Gender: EnumEditor;
    Address: StringEditor;
    govId: LookupEditor;
    cityId: LookupEditor;
    Cost: IntegerEditor;
    LoyalityYears: IntegerEditor;
    TotalCost: IntegerEditor;
}

export class PatientsForm extends PrefixedContext {
    static readonly formKey = 'Hosbital.Patients';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PatientsForm.init)  {
            PatientsForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;
            var w2 = EnumEditor;
            var w3 = LookupEditor;
            var w4 = IntegerEditor;

            initFormType(PatientsForm, [
                'PatientName', w0,
                'DateOfBirth', w1,
                'Gender', w2,
                'Address', w0,
                'govId', w3,
                'cityId', w3,
                'Cost', w4,
                'LoyalityYears', w4,
                'TotalCost', w4
            ]);
        }
    }
}

[Gender]; // referenced types
queueMicrotask(() => [GovernorateDialog, CityDialog]); // referenced dialogs
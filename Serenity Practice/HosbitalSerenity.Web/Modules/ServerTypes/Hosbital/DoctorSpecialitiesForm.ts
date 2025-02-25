import { ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface DoctorSpecialitiesForm {
    DoctorId: ServiceLookupEditor;
    SpecialityId: ServiceLookupEditor;
}

export class DoctorSpecialitiesForm extends PrefixedContext {
    static readonly formKey = 'Hosbital.DoctorSpecialities';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DoctorSpecialitiesForm.init)  {
            DoctorSpecialitiesForm.init = true;

            var w0 = ServiceLookupEditor;

            initFormType(DoctorSpecialitiesForm, [
                'DoctorId', w0,
                'SpecialityId', w0
            ]);
        }
    }
}
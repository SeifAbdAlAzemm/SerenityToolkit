import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface SpecialityForm {
    SpecialityName: StringEditor;
}

export class SpecialityForm extends PrefixedContext {
    static readonly formKey = 'Hosbital.Speciality';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SpecialityForm.init)  {
            SpecialityForm.init = true;

            var w0 = StringEditor;

            initFormType(SpecialityForm, [
                'SpecialityName', w0
            ]);
        }
    }
}
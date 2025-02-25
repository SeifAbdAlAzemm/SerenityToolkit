import { StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface CityForm {
    CityName: StringEditor;
    GovId: IntegerEditor;
}

export class CityForm extends PrefixedContext {
    static readonly formKey = 'Default.City';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CityForm.init)  {
            CityForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(CityForm, [
                'CityName', w0,
                'GovId', w1
            ]);
        }
    }
}
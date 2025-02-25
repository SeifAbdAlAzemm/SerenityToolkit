import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface GovernorateForm {
    GovName: StringEditor;
}

export class GovernorateForm extends PrefixedContext {
    static readonly formKey = 'Default.Governorate';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!GovernorateForm.init)  {
            GovernorateForm.init = true;

            var w0 = StringEditor;

            initFormType(GovernorateForm, [
                'GovName', w0
            ]);
        }
    }
}
import { LookupEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ImpersonateUserForm {
    ImperonatedUserId: LookupEditor;
    Username: StringEditor;
    DisplayName: StringEditor;
    Email: StringEditor;
}

export class ImpersonateUserForm extends PrefixedContext {
    static readonly formKey = 'Administration.ImpersonateUser';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ImpersonateUserForm.init)  {
            ImpersonateUserForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;

            initFormType(ImpersonateUserForm, [
                'ImperonatedUserId', w0,
                'Username', w1,
                'DisplayName', w1,
                'Email', w1
            ]);
        }
    }
}
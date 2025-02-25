import { ServiceLookupEditor, DateEditor, TextAreaEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface MedicalRecordsForm {
    DoctorId: ServiceLookupEditor;
    PatientId: ServiceLookupEditor;
    RecordDate: DateEditor;
    Notes: TextAreaEditor;
}

export class MedicalRecordsForm extends PrefixedContext {
    static readonly formKey = 'Hosbital.MedicalRecords';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MedicalRecordsForm.init)  {
            MedicalRecordsForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = DateEditor;
            var w2 = TextAreaEditor;

            initFormType(MedicalRecordsForm, [
                'DoctorId', w0,
                'PatientId', w0,
                'RecordDate', w1,
                'Notes', w2
            ]);
        }
    }
}
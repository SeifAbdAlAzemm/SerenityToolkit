import { StringEditor, LookupEditor, ImageUploadEditor, MultipleImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { DoctorPatientGrid } from "../../Hosbital/Doctors/DoctorPatientGrid";
import { SpecialityDialog } from "../../Hosbital/Speciality/SpecialityDialog";

export interface DoctorsForm {
    DoctorName: StringEditor;
    SpecialityList: LookupEditor;
    ProfilePicture: ImageUploadEditor;
    Documents: MultipleImageUploadEditor;
    PatientsGrid: DoctorPatientGrid;
}

export class DoctorsForm extends PrefixedContext {
    static readonly formKey = 'Hosbital.Doctors';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DoctorsForm.init)  {
            DoctorsForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;
            var w2 = ImageUploadEditor;
            var w3 = MultipleImageUploadEditor;
            var w4 = DoctorPatientGrid;

            initFormType(DoctorsForm, [
                'DoctorName', w0,
                'SpecialityList', w1,
                'ProfilePicture', w2,
                'Documents', w3,
                'PatientsGrid', w4
            ]);
        }
    }
}

queueMicrotask(() => [SpecialityDialog]); // referenced dialogs
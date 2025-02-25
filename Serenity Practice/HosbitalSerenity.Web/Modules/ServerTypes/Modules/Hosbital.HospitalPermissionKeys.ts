export namespace HospitalPermissionKeys {
    export const General = "Hospitals:General";

    export namespace Doctor {
        export const View = "Hospitals:Doctor:View";
        export const Modify = "Hospitals:Doctor:Modify";
        export const Delete = "Hospitals:Doctor:Delete";
    }

    export namespace Patient {
        export const View = "Hospitals:Patient:View";
        export const Modify = "Hospitals:Patient:Modify";
        export const Delete = "Hospitals:Patient:Delete";
        export const Link = "Hospitals:Patient:Link";
        export const Multiply = "Hospitals:Patient:Multiply";
    }

    export namespace MedicalRecord {
        export const View = "Hospitals:MedicalRecord:View";
        export const Modify = "Hospitals:MedicalRecord:Modify";
        export const Delete = "Hospitals:MedicalRecord:Delete";
    }

    export namespace Specialty {
        export const View = "Hospitals:Specialty:View";
        export const Modify = "Hospitals:Specialty:Modify";
        export const Delete = "Hospitals:Specialty:Delete";
    }
}
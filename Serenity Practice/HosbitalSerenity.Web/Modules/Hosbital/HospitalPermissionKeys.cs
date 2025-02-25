namespace HosbitalSerenity.Modules.Hosbital;

[NestedPermissionKeys]
[DisplayName("Hosbital")]
public class HospitalPermissionKeys
{
    [DisplayName("Doctors")]
    public class Doctor
    {
        [ImplicitPermission(General), ImplicitPermission(View)]
        public const string View = "Hospitals:Doctor:View";
        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Hospitals:Doctor:Modify";
        public const string Delete = "Hospitals:Doctor:Delete";
    }

    [DisplayName("Patients")]
    public class Patient
    {
        public const string View = "Hospitals:Patient:View";
        [Description("Create/Update")]
        public const string Modify = "Hospitals:Patient:Modify";
        public const string Delete = "Hospitals:Patient:Delete";
        public const string Link = "Hospitals:Patient:Link";
        public const string Multiply = "Hospitals:Patient:Multiply";
    }

    [DisplayName("Medical Records")]
    public class MedicalRecord
    {
        [ImplicitPermission(General), ImplicitPermission(View)]
        public const string View = "Hospitals:MedicalRecord:View";
        public const string Modify = "Hospitals:MedicalRecord:Modify";
        public const string Delete = "Hospitals:MedicalRecord:Delete";
    }

    [DisplayName("Specialties")]
    public class Specialty
    {
        public const string View = "Hospitals:Specialty:View";
        public const string Modify = "Hospitals:Specialty:Modify";
        public const string Delete = "Hospitals:Specialty:Delete";
    }

    [Description("[General]")]
    public const string General = "Hospitals:General";
}

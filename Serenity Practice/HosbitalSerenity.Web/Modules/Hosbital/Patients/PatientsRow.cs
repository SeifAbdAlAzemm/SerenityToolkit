using HosbitalSerenity.Administration.Entities;
using HosbitalSerenity.Default;
using HosbitalSerenity.Modules.Hosbital;
using HosbitalSerenity.Modules.Hosbital.Patients;

namespace HosbitalSerenity.Hosbital;

[ConnectionKey("Default"), Module("Hosbital"), TableName("Patients")]
[DisplayName("Patients"), InstanceName("Patients")]
[ReadPermission(HospitalPermissionKeys.Patient.View)]
[ModifyPermission(HospitalPermissionKeys.Patient.Modify)] 
[DeletePermission(HospitalPermissionKeys.Patient.Delete)]
[NavigationPermission(HospitalPermissionKeys.Patient.Link)]
[ServiceLookupPermission("Administration:General")]
//public sealed class PatientsRow : LoggingRow<PatientsRow.RowFields>, IIdRow, INameRow
public sealed class PatientsRow : Row<PatientsRow.RowFields>, IIdRow, INameRow
{
    const string jGov = nameof(jGov);
    const string jCity = nameof(jCity);


    [DisplayName("Patient Id"), Identity, IdProperty]
    public int? PatientId { get => fields.PatientId[this]; set => fields.PatientId[this] = value; }

    [DisplayName("Patient Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string PatientName { get => fields.PatientName[this]; set => fields.PatientName[this] = value; }

    [DisplayName("Date Of Birth"), NotNull]
    public DateTime? DateOfBirth { get => fields.DateOfBirth[this]; set => fields.DateOfBirth[this] = value; }

    [DisplayName("Gender"), NotNull]
    public Gender? Gender { get => fields.Gender[this]; set => fields.Gender[this] = value; }

    [DisplayName("Address"), Size(255)]
    public string Address { get => fields.Address[this]; set => fields.Address[this] = value; }

    [DisplayName("Age"), QuickSearch(SearchType.Equals, numericOnly: 1)]
    public int? Age { get => fields.PatientId[this]; set => fields.PatientId[this] = value; }

    [DisplayName("Governorate"), ForeignKey(typeof(GovernorateRow)), LeftJoin(jGov)]
    [LookupEditor(typeof(GovernorateRow), InplaceAdd = true)]
    public int? govId { get => fields.govId[this]; set => fields.govId[this] = value; }

    [DisplayName("Governorate"), QuickSearch, Origin(jGov, nameof(GovernorateRow.GovName))]
    public string GovName { get => fields.GovName[this]; set => fields.GovName[this] = value; }

    [DisplayName("City"), ForeignKey(typeof(CityRow)), LeftJoin(jCity)]
    [LookupEditor(typeof(CityRow), CascadeFrom = "govId", CascadeField = "GovId", InplaceAdd = true)]
    public int? cityId { get => fields.cityId[this]; set => fields.cityId[this] = value; }

    [DisplayName("City"), QuickSearch, Expression($"{jCity}.CityName")]
    public string CityName { get => fields.CityName[this]; set => fields.CityName[this] = value; }

    [DisplayName("Cost"), NotNull, QuickSearch(SearchType.Equals, numericOnly: 1), DefaultValue(0)]
    public int? Cost { get => fields.PatientId[this]; set => fields.PatientId[this] = value; }

    [DisplayName("Loyality Years"), QuickSearch(SearchType.Equals, numericOnly: 1), NotNull]
    public int? LoyalityYears { get => fields.PatientId[this]; set => fields.PatientId[this] = value; }

    [DisplayName("Total Cost"), Expression("t0.Cost * CASE WHEN t0.LoyalityYears >= 3 THEN 0.8 ELSE 1 END")]
    public int? TotalCost { get => fields.TotalCost[this]; set => fields.TotalCost[this] = value; }

    // public class RowFields : LoggingRowFields
    public class RowFields : RowFieldsBase
    {
        public Int32Field PatientId;
        public StringField PatientName;
        public DateTimeField DateOfBirth;
        public EnumField<Gender> Gender;
        public StringField Address;
        public Int32Field Age;
        public Int32Field Cost;
        public Int32Field LoyalityYears;
        public Int32Field TotalCost;
        public Int32Field govId;
        public StringField GovName;
        public Int32Field cityId;
        public StringField CityName;
    }
}
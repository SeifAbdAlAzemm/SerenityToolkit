using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital;

[ConnectionKey("Default"), Module("Hosbital"), TableName("DoctorSpecialities")]
[DisplayName("Doctor Specialities"), InstanceName("Doctor Specialities")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class DoctorSpecialitiesRow : Row<DoctorSpecialitiesRow.RowFields>, IIdRow
{
    const string jDoctor = nameof(jDoctor);
    const string jSpeciality = nameof(jSpeciality);

    [DisplayName("Doctor Speciality Id"), Identity, IdProperty]
    public int? DoctorSpecialityId { get => fields.DoctorSpecialityId[this]; set => fields.DoctorSpecialityId[this] = value; }

    [DisplayName("Doctor"), NotNull, ForeignKey(typeof(DoctorsRow)), LeftJoin(jDoctor), TextualField(nameof(DoctorName))]
    [ServiceLookupEditor(typeof(DoctorsRow), Service = "Hosbital/Doctors/List")]
    public int? DoctorId { get => fields.DoctorId[this]; set => fields.DoctorId[this] = value; }

    [DisplayName("Speciality"), NotNull, ForeignKey(typeof(SpecialityRow)), LeftJoin(jSpeciality), TextualField(nameof(SpecialityName))]
    [ServiceLookupEditor(typeof(SpecialityRow), Service = "Hosbital/Speciality/List")]
    public int? SpecialityId { get => fields.SpecialityId[this]; set => fields.SpecialityId[this] = value; }

    [DisplayName("Doctor Doctor Name"), Origin(jDoctor, nameof(DoctorsRow.DoctorName))]
    public string DoctorName { get => fields.DoctorName[this]; set => fields.DoctorName[this] = value; }

    [DisplayName("Speciality Speciality Name"), Origin(jSpeciality, nameof(SpecialityRow.SpecialityName))]
    public string SpecialityName { get => fields.SpecialityName[this]; set => fields.SpecialityName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field DoctorSpecialityId;
        public Int32Field DoctorId;
        public Int32Field SpecialityId;
        public StringField DoctorName;
        public StringField SpecialityName;
    }
}
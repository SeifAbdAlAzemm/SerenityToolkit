using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital;

[ConnectionKey("Default"), Module("Hosbital"), TableName("Doctors")]
[DisplayName("Doctors"), InstanceName("Doctors")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class DoctorsRow : Row<DoctorsRow.RowFields>, IIdRow, INameRow
{
    const string jSpeciality = nameof(jSpeciality);

    [DisplayName("Doctor Id"), Identity, IdProperty]
    public int? DoctorId { get => fields.DoctorId[this]; set => fields.DoctorId[this] = value; }

    [DisplayName("Doctor Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string DoctorName { get => fields.DoctorName[this]; set => fields.DoctorName[this] = value; }

    // Single Speciality-Related Mappings

    //[DisplayName("Speciality"), NotNull, ForeignKey(typeof(SpecialityRow)), LeftJoin(jSpeciality), TextualField(nameof(SpecialityName))]
    //[ServiceLookupEditor(typeof(SpecialityRow), InplaceAdd = true)]
    //public int? SpecialityId { get => fields.SpecialityId[this]; set => fields.SpecialityId[this] = value; }

    ////[DisplayName("Speciality Name"), Expression($"{jSpeciality}.Name")]
    //[DisplayName("Speciality Name"), Origin(jSpeciality, nameof(SpecialityRow.SpecialityName))]
    //public string SpecialityName { get => fields.SpecialityName[this]; set => fields.SpecialityName[this] = value; }


    // many-to-many (M-N) Genre-Related Mappings

    [DisplayName("Specialities"), LookupEditor(typeof(SpecialityRow), Multiple = true, InplaceAdd = true), NotMapped]
    [LinkingSetRelation(typeof(DoctorSpecialitiesRow), nameof(DoctorSpecialitiesRow.DoctorId), nameof(DoctorSpecialitiesRow.SpecialityId))]
    public List<int> SpecialityList { get => fields.SpecialityList[this]; set => fields.SpecialityList[this] = value; }

    [DisplayName("Profile Picture"), Size(100)]
    [ImageUploadEditor(FilenameFormat = "Doctors/ProfilePicture/~")]
    public string ProfilePicture { get => fields.ProfilePicture[this]; set => fields.ProfilePicture[this] = value; }

    [DisplayName("Documents")]
    [MultipleImageUploadEditor(FilenameFormat = "Doctors/Documents/~")]
    public string Documents { get => fields.Documents[this]; set => fields.Documents[this] = value; }
    public class RowFields : RowFieldsBase
    {
        public Int32Field DoctorId;
        public StringField DoctorName;
        public ListField<int> SpecialityList;
        public StringField ProfilePicture;
        public StringField Documents;
    }
}
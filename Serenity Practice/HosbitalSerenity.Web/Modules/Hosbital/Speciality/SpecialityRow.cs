using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital;

[ConnectionKey("Default"), Module("Hosbital"), TableName("Speciality")]
[DisplayName("Speciality"), InstanceName("Speciality")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class SpecialityRow : Row<SpecialityRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Speciality Id"), Identity, IdProperty]
    public int? SpecialityId { get => fields.SpecialityId[this]; set => fields.SpecialityId[this] = value; }

    [DisplayName("Speciality Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string SpecialityName { get => fields.SpecialityName[this]; set => fields.SpecialityName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field SpecialityId;
        public StringField SpecialityName;

    }
}
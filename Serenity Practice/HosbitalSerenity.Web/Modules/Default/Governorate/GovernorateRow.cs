using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace HosbitalSerenity.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Governorate")]
[DisplayName("Governorate"), InstanceName("Governorate")]
[ReadPermission("?")]
[ModifyPermission("?")]
[DeletePermission("?")]
[NavigationPermission("Administration:General")]
[ServiceLookupPermission("?")]
[LookupScript("Default.Governorate")]
public sealed class GovernorateRow : Row<GovernorateRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Gov Id"), Column("govId"), Identity, IdProperty]
    public int? GovId { get => fields.GovId[this]; set => fields.GovId[this] = value; }

    [DisplayName("Gov Name"), Column("govName"), Size(100), NotNull, QuickSearch, NameProperty]
    public string GovName { get => fields.GovName[this]; set => fields.GovName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field GovId;
        public StringField GovName;

    }
}
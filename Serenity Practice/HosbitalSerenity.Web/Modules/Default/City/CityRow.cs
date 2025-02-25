using HosbitalSerenity.Modules.Hosbital;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace HosbitalSerenity.Default;

[ConnectionKey("Default"), Module("Default"), TableName("City")]
[DisplayName("City"), InstanceName("City")]
[ReadPermission("?")]
[ModifyPermission("?")]
[DeletePermission("?")]
[NavigationPermission("Administration:General")]
[ServiceLookupPermission("?")]
[LookupScript("Default.City")]

public sealed class CityRow : Row<CityRow.RowFields>, IIdRow, INameRow
{
    const string jGov = nameof(jGov);

    [DisplayName("City Id"), Column("cityId"), Identity, IdProperty]
    public int? CityId { get => fields.CityId[this]; set => fields.CityId[this] = value; }

    [DisplayName("City Name"), Column("cityName"), Size(100), NotNull, QuickSearch, NameProperty]
    public string CityName { get => fields.CityName[this]; set => fields.CityName[this] = value; }

    [DisplayName("Gov"), Column("govId"), ForeignKey("Governorate", "govId"), LeftJoin(jGov), TextualField(nameof(GovName)), LookupInclude]
    public int? GovId { get => fields.GovId[this]; set => fields.GovId[this] = value; }

    [DisplayName("Governorate Name"), Expression($"{jGov}.[govName]")]
    public string GovName { get => fields.GovName[this]; set => fields.GovName[this] = value; }



    public class RowFields : RowFieldsBase
    {
        public Int32Field CityId;
        public StringField CityName;
        public Int32Field GovId;
        public StringField GovName;
    }
}
using Serenity.ComponentModel;
using System.ComponentModel;

namespace HosbitalSerenity.Default.Columns;

[ColumnsScript("Default.City")]
[BasedOnRow(typeof(CityRow), CheckNames = true)]
public class CityColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CityId { get; set; }
    [EditLink]
    public string CityName { get; set; }
    public string GovName { get; set; }
}
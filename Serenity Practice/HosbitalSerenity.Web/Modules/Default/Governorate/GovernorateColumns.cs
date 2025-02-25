using Serenity.ComponentModel;
using System.ComponentModel;

namespace HosbitalSerenity.Default.Columns;

[ColumnsScript("Default.Governorate")]
[BasedOnRow(typeof(GovernorateRow), CheckNames = true)]
public class GovernorateColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int GovId { get; set; }
    [EditLink]
    public string GovName { get; set; }
}
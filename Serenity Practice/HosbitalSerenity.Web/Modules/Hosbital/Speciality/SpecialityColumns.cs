using Serenity.ComponentModel;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital.Columns;

[ColumnsScript("Hosbital.Speciality")]
[BasedOnRow(typeof(SpecialityRow), CheckNames = true)]
public class SpecialityColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int SpecialityId { get; set; }
    [EditLink]
    public string SpecialityName { get; set; }
}
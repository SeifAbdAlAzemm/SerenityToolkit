using Hosbital;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital.Columns;

[ColumnsScript("Hosbital.Doctors")]
[BasedOnRow(typeof(DoctorsRow), CheckNames = true)]
public class DoctorsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int DoctorId { get; set; }

    [EditLink]
    public string DoctorName { get; set; }

    [Width(200), SpecialityListFormatter, QuickFilter, LookupEditor(typeof(SpecialityRow), Multiple = true, InplaceAdd = false)]
    public List<int> SpecialityList { get; set; }
}
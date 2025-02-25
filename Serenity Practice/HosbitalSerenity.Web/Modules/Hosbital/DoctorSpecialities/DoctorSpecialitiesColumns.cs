using Serenity.ComponentModel;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital.Columns;

[ColumnsScript("Hosbital.DoctorSpecialities")]
[BasedOnRow(typeof(DoctorSpecialitiesRow), CheckNames = true)]
public class DoctorSpecialitiesColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int DoctorSpecialityId { get; set; }
    public string DoctorName { get; set; }
    public string SpecialityName { get; set; }
}
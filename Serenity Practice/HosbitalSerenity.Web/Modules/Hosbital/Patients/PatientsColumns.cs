using HosbitalSerenity.Modules.Hosbital.Patients;

namespace HosbitalSerenity.Hosbital.Columns;

[ColumnsScript("Hosbital.Patients")]
[BasedOnRow(typeof(PatientsRow), CheckNames = true)]
public class PatientsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int PatientId { get; set; }
    [EditLink]
    public string PatientName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public Gender Gender { get; set; }
    public string Address { get; set; }
    public int Age { get; set; }
    public string GovName { get; set; }
    public string CityName { get; set; }
    public int Cost { get; set; }
    public int LoyalityYears { get; set; }
    public int TotalCost { get; set; }
}
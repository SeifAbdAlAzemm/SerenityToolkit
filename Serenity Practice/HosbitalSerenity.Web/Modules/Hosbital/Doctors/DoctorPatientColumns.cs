using HosbitalSerenity.Hosbital;

namespace HosbitalSerenity.Modules.Hosbital.Doctors;

[ColumnsScript]
[BasedOnRow(typeof(MedicalRecordsRow))]
public class DoctorPatientColumns
{
    [Width(527)]
    public string PatientName { get; set; }

    [Width(527)]
    public string Notes { get; set; }
}

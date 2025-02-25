using Serenity.ComponentModel;
using System;

namespace HosbitalSerenity.Hosbital.Forms;

[FormScript("Hosbital.MedicalRecords")]
[BasedOnRow(typeof(MedicalRecordsRow), CheckNames = true)]
public class MedicalRecordsForm
{
    public int DoctorId { get; set; }
    public int PatientId { get; set; }
    public DateTime RecordDate { get; set; }

    [TextAreaEditor(Rows = 5)]
    public string Notes { get; set; }
}
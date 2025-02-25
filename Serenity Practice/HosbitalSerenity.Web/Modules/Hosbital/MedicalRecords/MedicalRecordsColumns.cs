using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital.Columns;

[ColumnsScript("Hosbital.MedicalRecords")]
[BasedOnRow(typeof(MedicalRecordsRow), CheckNames = true)]
public class MedicalRecordsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int RecordId { get; set; }
    public string DoctorName { get; set; }
    public string PatientName { get; set; }
    public DateTime RecordDate { get; set; }
    [EditLink]
    public string Notes { get; set; }
}
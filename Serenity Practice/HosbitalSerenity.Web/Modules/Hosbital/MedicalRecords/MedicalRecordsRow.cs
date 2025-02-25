using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital;

[ConnectionKey("Default"), Module("Hosbital"), TableName("MedicalRecords")]
[DisplayName("Medical Records"), InstanceName("Medical Records")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class MedicalRecordsRow : Row<MedicalRecordsRow.RowFields>, IIdRow, INameRow
{
    const string jDoctor = nameof(jDoctor);
    const string jPatient = nameof(jPatient);

    [DisplayName("Record Id"), Identity, IdProperty]
    public int? RecordId { get => fields.RecordId[this]; set => fields.RecordId[this] = value; }

    [DisplayName("Doctor"), NotNull, ForeignKey(typeof(DoctorsRow)), LeftJoin(jDoctor), TextualField(nameof(DoctorName))]
    [ServiceLookupEditor(typeof(DoctorsRow))]
    public int? DoctorId { get => fields.DoctorId[this]; set => fields.DoctorId[this] = value; }

    [DisplayName("Patient"), NotNull, ForeignKey(typeof(PatientsRow)), LeftJoin(jPatient), TextualField(nameof(PatientName))]
    [ServiceLookupEditor(typeof(PatientsRow), FilterField = "Gender", FilterValue = 1)]
    public int? PatientId { get => fields.PatientId[this]; set => fields.PatientId[this] = value; }

    [DisplayName("Record Date")]
    public DateTime? RecordDate { get => fields.RecordDate[this]; set => fields.RecordDate[this] = value; }

    [DisplayName("Notes"), Size(500), QuickSearch, NameProperty]
    public string Notes { get => fields.Notes[this]; set => fields.Notes[this] = value; }

    [DisplayName("Doctor Name"), Origin(jDoctor, nameof(DoctorsRow.DoctorName)), QuickSearch]
    public string DoctorName { get => fields.DoctorName[this]; set => fields.DoctorName[this] = value; }

    [DisplayName("Patient Name"), Origin(jPatient, nameof(PatientsRow.PatientName)), QuickSearch(SearchType.StartsWith)]
    public string PatientName { get => fields.PatientName[this]; set => fields.PatientName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field RecordId;
        public Int32Field DoctorId;
        public Int32Field PatientId;
        public DateTimeField RecordDate;
        public StringField Notes;
        public StringField DoctorName;
        public StringField PatientName;
    }
}
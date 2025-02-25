using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace HosbitalSerenity.Hosbital;

public partial class DoctorPatientGridAttribute : CustomEditorAttribute
{
    public const string Key = "HosbitalSerenity.Hosbital.DoctorPatientGrid";

    public DoctorPatientGridAttribute()
        : base(Key)
    {
    }
}
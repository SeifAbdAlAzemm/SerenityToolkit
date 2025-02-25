using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Hosbital;

public partial class SpecialityListFormatterAttribute : CustomFormatterAttribute
{
    public const string Key = "Hosbital.SpecialityListFormatter";

    public SpecialityListFormatterAttribute()
        : base(Key)
    {
    }
}
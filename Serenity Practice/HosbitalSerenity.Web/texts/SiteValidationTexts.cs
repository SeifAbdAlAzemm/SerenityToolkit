namespace HosbitalSerenity;

[NestedLocalTexts(Prefix = "Validation.")]
public static partial class SiteValidationTexts
{
    public static readonly LocalText CostGreaterThanZero = "Cost must be greater than zero!";
    public static readonly LocalText LoyaltyYearsNonNegative = "Loyalty years cannot be negative.";
    public static readonly LocalText DuplicatedEntity = "A patient with the same name and date of birth already exists.";
}

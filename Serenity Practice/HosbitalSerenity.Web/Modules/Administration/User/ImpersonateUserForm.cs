using HosbitalSerenity.Administration;

namespace HosbitalSerenity.Modules.Administration.User;

[FormScript("Administration.ImpersonateUser")]
[BasedOnRow(typeof(UserRow), CheckNames = true)]
public class ImpersonateUserForm
{
    [Required]
    [LookupEditor(typeof(UserRow))]
    public int ImperonatedUserId { get; set; }

    [Category(" User Details")]

    [ReadOnly(true),HalfWidth]
    public string Username { get; set; }
    [ReadOnly(true), HalfWidth]
    public string DisplayName { get; set; }
    //[EmailAddressEditor]
    [ReadOnly(true)]
    public string Email { get; set; }
}
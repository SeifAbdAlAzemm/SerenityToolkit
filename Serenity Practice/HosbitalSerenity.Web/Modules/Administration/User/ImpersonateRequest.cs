namespace HosbitalSerenity.Modules.Administration.User;
using Serenity.Services;

public class ImpersonateRequest : ServiceRequest
{
    public int UserId { get; set; }
}


using MyRequest = HosbitalSerenity.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Administration.UserRow>;
using MyRow = HosbitalSerenity.Administration.UserRow;

namespace HosbitalSerenity.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}
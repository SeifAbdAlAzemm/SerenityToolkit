﻿using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Administration.RoleRow>;
using MyRow = HosbitalSerenity.Administration.RoleRow;


namespace HosbitalSerenity.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}
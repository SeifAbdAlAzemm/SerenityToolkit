using System.Security.Claims;
using HosbitalSerenity.Modules.Administration.User;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using MyRow = HosbitalSerenity.Administration.UserRow;

namespace HosbitalSerenity.Administration.Endpoints;
[Route("Services/Administration/User/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class UserEndpoint : ServiceEndpoint
{
    //private readonly ISqlConnections _sqlConnections;
    //private readonly IHttpContextAccessor _httpContextAccessor;

    //public UserEndpoint(ISqlConnections sqlConnections, IHttpContextAccessor httpContextAccessor)
    //{
    //    _sqlConnections = sqlConnections;
    //    _httpContextAccessor = httpContextAccessor;
    //}

    ////[HttpPost, Authorize(Policy = "Administration:ImpersonateUser")]
    //public IActionResult Impersonate(ImpersonateRequest request, [FromServices] IUserRetrieveHandler handler)
    //{
    //    if (request.UserId == 0)
    //        throw new ArgumentNullException(nameof(request.UserId));

    //    using (var connection = _sqlConnections.NewFor<MyRow>())
    //    {
    //        var user = handler.Retrieve(connection, new RetrieveRequest
    //        {
    //            EntityId = request.UserId
    //        }).Entity;

    //        if (user == null)
    //        {
    //            throw new ValidationError("The selected user does not exist. Please check the User ID and try again.");
    //            //return BadRequest("User not found.");
    //        }

    //        var context = _httpContextAccessor.HttpContext;

    //        if (context == null)
    //            return BadRequest("Invalid request.");

    //        var originalUserId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    //        if (string.IsNullOrEmpty(originalUserId))
    //            return BadRequest("Cannot impersonate: No original user found.");

    //        var claims = new List<Claim>
    //        {
    //            new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
    //            new Claim(ClaimTypes.Name, user.Username),
    //            new Claim(ClaimTypes.GivenName, user.DisplayName),
    //            new Claim("IsImpersonating", "true"),
    //            new Claim("OriginalUserId", originalUserId)
    //        };

    //       user.Roles?.ForEach(roleId => claims.Add(new Claim(ClaimTypes.Role, roleId.ToString())));

    //        var identity = new ClaimsIdentity(claims, "Impersonation");
    //        var principal = new ClaimsPrincipal(identity);

    //        _httpContextAccessor.HttpContext.SignInAsync("Cookies", principal);

    //        return Ok(new { Success = true, Message = "Impersonation successful!" });
    //    }
    //}

    //[HttpGet]
    //public IActionResult ExitImpersonation([FromServices] IUserRetrieveHandler handler)
    //{
    //    var context = _httpContextAccessor.HttpContext;
    //    if (context == null)
    //        return BadRequest("Invalid request.");

    //    var originalUserId = context.User.FindFirst("OriginalUserId")?.Value;

    //    // If no OriginalUserId found, just sign out
    //    if (string.IsNullOrEmpty(originalUserId))
    //    {
    //        context.SignOutAsync("Cookies");
    //        return Ok(new { Success = true, Message = "Exited impersonation successfully!" });
    //    }

    //    // Restore Original User Session
    //    using (var connection = _sqlConnections.NewFor<MyRow>())
    //    {
    //        var originalUser = handler.Retrieve(connection, new RetrieveRequest
    //        {
    //            EntityId = int.Parse(originalUserId)
    //        }).Entity;

    //        if (originalUser == null)
    //        {
    //            context.SignOutAsync("Cookies");
    //            return BadRequest("Original user not found.");
    //        }

    //        var claims = new List<Claim>
    //    {
    //        new Claim(ClaimTypes.NameIdentifier, originalUserId),
    //        new Claim(ClaimTypes.Name, originalUser.Username),
    //        new Claim(ClaimTypes.GivenName, originalUser.DisplayName)
    //    };

    //        originalUser.Roles?.ForEach(roleId => claims.Add(new Claim(ClaimTypes.Role, roleId.ToString())));

    //        var identity = new ClaimsIdentity(claims, "Cookies");
    //        var principal = new ClaimsPrincipal(identity);

    //        context.SignInAsync("Cookies", principal);

    //        return Ok(new
    //        {
    //            Success = true,
    //            Message = "Exited impersonation and restored the original user session!",
    //            User = new
    //            {
    //                originalUser.UserId,
    //                originalUser.Username,
    //                originalUser.DisplayName
    //            }
    //        });
    //    }
    //}


    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] IUserSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] IUserSaveHandler handler)
    {
        return handler.Update(uow, request);
    }

    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] IUserDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request, [FromServices] IUserRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    public ListResponse<MyRow> List(IDbConnection connection, UserListRequest request, [FromServices] IUserListHandler handler)
    {
        return handler.List(connection, request);
    }
}
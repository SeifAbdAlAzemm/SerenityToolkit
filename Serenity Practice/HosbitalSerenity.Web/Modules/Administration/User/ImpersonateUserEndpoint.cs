using System.Security.Claims;
using HosbitalSerenity.Modules.Administration.User;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Serenity.Data;
using MyRow = HosbitalSerenity.Administration.UserRow;

namespace HosbitalSerenity.Administration.Endpoints;
[Route("Services/Administration/ImpersonateUser/[action]")]
public class ImpersonateUserEndpoint(ISqlConnections sqlConnections, IHttpContextAccessor httpContextAccessor) : ServiceEndpoint
{
    private readonly ISqlConnections _sqlConnections = sqlConnections;
    private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

    //[HttpPost, Authorize(Policy = "Administration:ImpersonateUser")]
    public IActionResult Impersonate(ImpersonateRequest request, [FromServices] IUserRetrieveHandler handler)
    {
        if (request.UserId == 0)
            throw new ArgumentNullException(nameof(request.UserId));

        using (var connection = _sqlConnections.NewFor<MyRow>())
        {
            var user = handler.Retrieve(connection, new RetrieveRequest
            {
                EntityId = request.UserId
            }).Entity;

            if (user == null)
            {
                throw new ValidationError("The selected user does not exist. Please check the User ID and try again.");
                //return BadRequest("User not found.");
            }

            var context = _httpContextAccessor.HttpContext;

            if (context == null)
                return BadRequest("Invalid request.");

            var originalUserId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(originalUserId))
                return BadRequest("Cannot impersonate: No original user found.");

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.GivenName, user.DisplayName),
                new Claim("IsImpersonating", "true"),
                new Claim("OriginalUserId", originalUserId)
            };

            user.Roles?.ForEach(roleId => claims.Add(new Claim(ClaimTypes.Role, roleId.ToString())));

            var identity = new ClaimsIdentity(claims, "Impersonation");
            var principal = new ClaimsPrincipal(identity);

            _httpContextAccessor.HttpContext.SignInAsync("Cookies", principal);

            return Ok(new { Success = true, Message = "Impersonation successful!" });
        }
    }

    ////[HttpPost]
    //[HttpGet]
    public IActionResult ExitImpersonation([FromServices] IUserRetrieveHandler handler)
    {
        var context = _httpContextAccessor.HttpContext;
        if (context == null)
            return BadRequest("Invalid request.");

        var originalUserId = context.User.FindFirst("OriginalUserId")?.Value;

        // If no OriginalUserId found, just sign out
        if (string.IsNullOrEmpty(originalUserId))
        {
            context.SignOutAsync("Cookies");
            return Ok(new { Success = true, Message = "Exited impersonation successfully!" });
        }

        // Restore Original User Session
        using (var connection = _sqlConnections.NewFor<MyRow>())
        {

            //var originalUser = handler.Retrieve(connection, new RetrieveRequest
            //{
            //    EntityId = int.Parse(originalUserId)
            //}).Entity;

            var fld = UserRow.Fields;
            var fldRoles = UserRoleRow.Fields;
            var originalUser = connection.First<UserRow>(a => a.SelectTableFields().SelectNonTableFields().Where(fld.UserId == originalUserId));
            var originalUserRoles = connection.List<UserRoleRow>(a => a.SelectTableFields().SelectNonTableFields().Where(fldRoles.UserId == originalUserId));


            if (originalUser == null)
            {
                context.SignOutAsync("Cookies");
                return BadRequest("Original user not found.");
            }


            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, originalUserId),
                new Claim(ClaimTypes.Name, originalUser.Username),
                new Claim(ClaimTypes.GivenName, originalUser.DisplayName)
            };

            foreach (var role in originalUserRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role.RoleId.ToString()));
            }
            //originalUser.Roles?.ForEach(roleId => claims.Add(new Claim(ClaimTypes.Role, roleId.ToString())));

            var identity = new ClaimsIdentity(claims, "Cookies");
            var principal = new ClaimsPrincipal(identity);

            context.SignInAsync("Cookies", principal);

            //return Ok(new
            //{
            //    Success = true,
            //    Message = "Exited impersonation and restored the original user session!",
            //    User = new
            //    {
            //        originalUser.UserId,
            //        originalUser.Username,
            //        originalUser.DisplayName
            //    }
            //});

            return Redirect("~/");

        }
    }


}
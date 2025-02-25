using Serenity.Services;
using MyRequest = HosbitalSerenity.Modules.Hosbital.Doctors.SpecialityListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Hosbital.DoctorsRow>;
using MyRow = HosbitalSerenity.Hosbital.DoctorsRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorsListHandler
{
    public DoctorsListHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (!Request.Specialities.IsEmptyOrNull())
        {
            var fld = MyRow.Fields;
            var ds = DoctorSpecialitiesRow.Fields.As("ds");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .From(ds)
                    .Select("1")
                    .Where(
                        ds.DoctorId == fld.DoctorId &&
                        ds.SpecialityId.In(Request.Specialities))));
        }
    }
}
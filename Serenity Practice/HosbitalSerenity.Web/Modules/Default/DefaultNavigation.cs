using Serenity.Navigation;
using MyPages = HosbitalSerenity.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Governorate", typeof(MyPages.GovernoratePage), icon: "fa-map")]
[assembly: NavigationLink(int.MaxValue, "Default/City", typeof(MyPages.CityPage), icon: "fa-city")]
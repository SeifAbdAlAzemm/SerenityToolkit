using Serenity.Navigation;
using MyPages = HosbitalSerenity.Hosbital.Pages;

[assembly: NavigationMenu(int.MaxValue, "Hosbital", icon: "fa-hospital")]
[assembly: NavigationLink(int.MaxValue, "Hosbital/Doctors", typeof(MyPages.DoctorsPage), icon: "fa-stethoscope")]
[assembly: NavigationLink(int.MaxValue, "Hosbital/Patients", typeof(MyPages.PatientsPage), icon: "fa-user-injured")]
[assembly: NavigationLink(int.MaxValue, "Hosbital/Medical Records", typeof(MyPages.MedicalRecordsPage), icon: "fa-notes-medical")]
[assembly: NavigationLink(int.MaxValue, "Hosbital/Speciality", typeof(MyPages.SpecialityPage), icon: "fa-tools")]
# 🚀 SerenityToolkit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Overview
This repository documents various tasks implemented in a Serenity.is-based project. These tasks will enrich your knowledge about Serenity.is features and teach you how to customize your Serenity.is-based applications. While solutions are provided, I recommend trying to solve the tasks on your own first, and consulting the README.md hints if you encounter difficulties.

## 🔧 Technologies Used
- **Framework**: Serenity.is
- **Backend**: C# & ASP.NET Core
- **Database**: SQL Server
- **Frontend**: TypeScript, React, JSON
- **Styling**: CSS & Frontend Customization

## 📑 Table of Contents
- [Accomplished Tasks](#-accomplished-tasks)
- [Implemented Solutions](#-implemented-solutions)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 📌 Accomplished Tasks

### UI Enhancements
1. [Converted Notes Field to Textarea](#1-converted-notes-field-to-a-textarea)
2. [Customized Label Colors in MedicalRecords Dialog](#2-customized-label-colors-in-medicalrecords-dialog)
3. [Implemented Tab Navigation in Doctors Form](#13-implemented-tab-navigation-in-doctors-form)
4. [Added Primary Image & Document Upload Fields](#14-added-primary-image--document-upload-fields-in-doctors-form)
5. [Implemented Toggle Read-Only Mode for Patients Form](#26-toggle-read-only-mode-for-patients-form)
6. [Created Gender-Specific Tabs in Patients Grid](#27-create-gender-specific-tabs-in-the-patients-grid)
7. [Applied Different Background Colors Based on Gender](#23-applying-different-background-colors-to-male-and-female-patients-in-the-grid)

### Data Management
1. [Added Age Field to Patients Table](#5-added-age-field-to-the-patients-table)
2. [Implemented Gender Enum in Patients Row](#7-implemented-gender-enum-in-patients-row)
3. [Added Speciality Selection in Doctors Form](#8-enabled-speciality-selection-in-doctors-form)
4. [Enabled Adding New Speciality in Patients Form](#9-allowed-adding-new-speciality-in-patients-form)
5. [Implemented Cost and Loyalty-Based Discount](#10-implemented-cost-loyalty-based-discount--total-cost-calculation)
6. [Supported Multiple Specialties for Doctors](#11-allowed-doctors-to-have-multiple-specialties)
7. [Created Tables for Governorates and Cities](#15-created-tables-for-governorates-and-cities)
8. [Added "Other" Option in Gender Enum and Disabled It](#25-adding-a-other-option-in-gender-enum-and-disabling-it)

### Search & Filtering
1. [Enhanced Search Functionality in MedicalRecords Grid](#3-enabled-search-by-doctor-name--patient-name-in-medicalrecords-grid)
2. [Implemented Column-Specific Search in QuickSearch](#4-implemented-column-specific-search-in-quicksearch)
3. [Enabled Age-Based Search in Patients Grid](#6-enabled-age-based-search-in-patients-grid)
4. [Implemented Multi-Specialty Filtering in Doctors Page](#12-implemented-multi-specialty-filtering-in-doctors-page)
5. [Filtered Patients Grid to Display Only Male Patients](#21-filtering-the-patients-grid-to-display-only-male-patients)
6. [Filtered Patients Lookup in Medical Records Form](#28-filter-patients-lookup-in-medical-records-form)

### Security & Validation
1. [Registered New Permissions & User Access Control](#16-implemented-permissions--user-access-control)
2. [Created Action Button for Cost Multiplication (Permission-Based)](#17-created-an-action-button-for-cost-multiplication)
3. [Validated Cost and Loyalty Years in Patients Form](#18-validated-cost-and-loyalty-years-in-patients-form)
4. [Prevented Duplicate Patient Entries](#19-prevented-duplicate-patient-entries-in-the-database)
5. [Translated Validation Messages for User Clarity](#20-translated-validation-messages-for-user-clarity)
6. [Restricted User Access to Editing Specific Patient](#22-restricting-user-access-to-editing-only-one-specific-patient)
7. [Dynamic Field Requirements Based on Gender](#24-dynamically-requiring-and-displaying-the-address-field-based-on-gender-selection)

## 🛠 Implemented Solutions

### 1. Converted Notes Field to a Textarea
```csharp
[TextAreaEditor(Rows = 5)]
public string Notes { get; set; }
```
- Added the `[TextAreaEditor(Rows = 5)]` attribute to the **Notes** field in `MedicalRecordsForm.cs`, enabling multi-line input.

### 2. Customized Label Colors in MedicalRecords Dialog
```css
.s-Hosbital-MedicalRecordsDialog .field-label {
    color: #3366cc;
    font-weight: bold;
}
```
- Created a new CSS file and applied styling using the format `.s-{ModuleName}-{ClassName}`
- Imported the CSS file into the relevant module.

### 3. Enabled Search by Doctor Name & Patient Name in MedicalRecords Grid
```csharp
[QuickSearch(SearchType.StartsWith)]
public string DoctorFullName { get; set; }

[QuickSearch(SearchType.StartsWith)]
public string PatientFullName { get; set; }
```
- Added the `[QuickSearch]` attribute to the fields in `MedicalRecordsColumns.cs`.
- Configured the search to **"starts with"** instead of **"contains"** for optimized results.

### 4. Implemented Column-Specific Search in QuickSearch
```typescript
protected getQuickSearchFields(): Serenity.QuickSearchField[] {
    return [
        { name: "", title: "all" },
        { name: "DoctorFullName", title: "doctor" },
        { name: "PatientFullName", title: "patient" }
    ];
}
```
- Implemented `getQuickSearchFields()` in `MedicalRecordsGrid.ts` to enable column-specific searching.

### 5. Added Age Field to the Patients Table
```sql
ALTER TABLE Patients
ADD Age INT NULL;
```
```csharp
[DisplayName("Age"), NotNull]
public int? Age { get; set; }
```
- Created a new `Age` column in the database
- Updated `PatientsRow.cs` to include the field and made it visible in forms and grids.

### 6. Enabled Age-Based Search in Patients Grid
```typescript
protected getQuickSearchFields(): Serenity.QuickSearchField[] {
    return [
        { name: "", title: "all" },
        { name: "FullName", title: "name" },
        { name: "Age", title: "age" }
    ];
}
```
- Modified `getQuickSearchFields()` in the Patients Grid to allow searching by age.

### 7. Implemented Gender Enum in Patients Row
```csharp
[EnumKey("Patients.Gender")]
public enum Gender {
    [Description("Male")]
    Male = 1,
    [Description("Female")]
    Female = 2
}
```
```csharp
[DisplayName("Gender"), NotNull]
public Gender? Gender { get; set; }
```
- Created a Gender Enum class
- Updated `PatientsRow.cs` to use the enum for standardized gender selection.

### 8. Enabled Speciality Selection in Doctors Form
```csharp
[DisplayName("Speciality"), NotNull, ForeignKey("Specialities", "SpecialityId"), LeftJoin("s")]
[LookupEditor(typeof(SpecialityRow))]
public int? SpecialityId { get; set; }
```
```csharp
[LookupScript]
public class SpecialityRow { /*...*/ }
```
- Mapped **SpecialityId** in `DoctorsRow.cs`
- Used `[LookupEditor]` and added `[LookupScript]` to `SpecialityRow.cs`.

### 9. Allowed Adding New Speciality in Patients Form
```csharp
[LookupEditor(typeof(SpecialityRow), InplaceAdd = true)]
public int? SpecialityId { get; set; }
```
- Added the `InplaceAdd = true` parameter to enable adding new specialties on the fly.

### 10. Implemented Cost, Loyalty-Based Discount & Total Cost Calculation
```csharp
[DisplayName("Cost"), NotNull]
public decimal? Cost { get; set; }

[DisplayName("Loyalty Years"), NotNull]
public int? LoyaltyYears { get; set; }

[DisplayName("Total Cost (After Discount)"), Expression("CASE WHEN t0.LoyaltyYears >= 3 THEN t0.Cost * 0.85 ELSE t0.Cost END")]
public decimal? TotalCost { get; set; }
```
- Added the required fields and implemented an expression-based discount calculation.

### 11. Allowed Doctors to Have Multiple Specialties
```sql
CREATE TABLE DoctorSpecialties (
    DoctorId INT NOT NULL,
    SpecialtyId INT NOT NULL,
    PRIMARY KEY (DoctorId, SpecialtyId),
    FOREIGN KEY (DoctorId) REFERENCES Doctors(DoctorId),
    FOREIGN KEY (SpecialtyId) REFERENCES Specialties(SpecialtyId)
);
```
```csharp
[LookupEditor(typeof(SpecialtyRow), Multiple = true)]
[LinkingSetRelation(typeof(DoctorSpecialtyRow), "DoctorId", "SpecialtyId")]
public List<int> SpecialtyList { get; set; }
```
- Created a many-to-many relationship table
- Used `[LookupEditor(Multiple = true)]` for multiple selection
- Applied `[LinkingSetRelation]` to define the relationship.

### 12. Implemented Multi-Specialty Filtering in Doctors Page
```typescript
protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
    let filters = super.getQuickFilters();
    
    let specialtyListFilter = Q.first(filters, x => 
        x.field == DoctorsRow.Fields.SpecialtyList);
        
    if (specialtyListFilter) {
        specialtyListFilter.handler = h => {
            const request = h.request as SpecialtyListRequest;
            const values = h.widget.value as number[];
            request.SpecialtyIds = values;
        };
    }
    
    return filters;
}
```
- Created a custom request to handle specialty filtering
- Updated the grid to enable filtering by multiple specialties.

### 13. Implemented Tab Navigation in Doctors Form
```csharp
[Tab("Doctor Details")]
[Category("Personal Information")]
public string FullName { get; set; }

// Other doctor fields...

[Tab("Patients")]
[Category("Patient List")]
[DoctorPatientsEditor]
public List<int> PatientList { get; set; }
```
- Used the `[Tab]` attribute to organize fields into tabs
- Created a custom editor for the patients list
- Implemented filtering to show only patients for the selected doctor.

### 14. Added Primary Image & Document Upload Fields in Doctors Form
```csharp
[DisplayName("Primary Image"), ImageUploadEditor(FilenameFormat = "Doctors/~")]
public string PrimaryImage { get; set; }

[DisplayName("Certificates"), MultipleImageUploadEditor(FilenameFormat = "Doctors/Documents/~")]
public string Documents { get; set; }
```
- Added fields for image uploads in the Doctors table
- Used appropriate editors for single and multiple image uploads.

### 15. Created Tables for Governorates and Cities
```csharp
[DisplayName("Governorate"), NotNull, ForeignKey("Governorates", "Id")]
[LookupEditor(typeof(GovernorateRow))]
public int? GovernorateId { get; set; }

[DisplayName("City"), NotNull, ForeignKey("Cities", "Id")]
[LookupEditor(typeof(CityRow), CascadeFrom = "GovernorateId", CascadeField = "GovernorateId")]
public int? CityId { get; set; }
```
- Created tables with appropriate foreign key relationships
- Implemented cascading dropdowns using `CascadeFrom` and `CascadeField`.

### 16. Implemented Permissions & User Access Control
```csharp
[NestedPermissionKeys]
[DisplayName("Hospital")]
public class PermissionKeys
{
    [DisplayName("Doctors")]
    public class Doctors
    {
        public const string View = "Hospital:Doctor:View";
        public const string Create = "Hospital:Doctor:Create";
        public const string Update = "Hospital:Doctor:Update";
        public const string Delete = "Hospital:Doctor:Delete";
    }
    
    // Other modules...
}
```
- Created a structured permission system
- Assigned specific permissions to modules and operations
- Applied permissions to row classes and endpoints.

### 17. Created an Action Button for Cost Multiplication
```typescript
protected getToolbarButtons(): Serenity.ToolButton[] {
    let buttons = super.getToolbarButtons();
    
    buttons.push({
        title: "Multiply Cost",
        cssClass: "multiply-cost-button",
        icon: "fa fa-calculator",
        onClick: () => {
            // Multiply cost logic
            this.multiplyCost();
        }
    });
    
    return buttons;
}

private multiplyCost(): void {
    if (!this.validateEditorValues())
        return;
        
    let costEditor = this.form.Cost;
    let currentCost = costEditor.value;
    costEditor.value = currentCost * 2;
    
    this.save(response => {
        Q.notifySuccess("Cost has been multiplied!");
    });
}

protected afterLoadEntity(): void {
    super.afterLoadEntity();
    
    // Show button only for existing records and users with permission
    let isNew = this.isNew();
    let hasPermission = Authorization.hasPermission("Hospital:Patients:Multiply");
    
    this.toolbar.findButton("multiply-cost-button").toggle(!isNew && hasPermission);
}
```
- Added a custom button in the toolbar
- Implemented logic for cost multiplication
- Applied permission-based visibility control.

### 18. Validated Cost and Loyalty Years in Patients Form
```typescript
protected validateBeforeSave(): boolean {
    if (!super.validateBeforeSave())
        return false;
        
    let cost = this.form.Cost.value;
    let loyaltyYears = this.form.LoyaltyYears.value;
    
    if (cost <= 0 || loyaltyYears <= 0) {
        Q.notifyError("Cost and Loyalty Years must be greater than zero.");
        return false;
    }
    
    return true;
}
```
- Added custom validation in the dialog
- Displayed appropriate error messages.

### 19. Prevented Duplicate Patient Entries in the Database
```csharp
protected override void BeforeSave()
{
    base.BeforeSave();
    
    if (IsCreate || Row.FullName != Old.FullName || Row.DateOfBirth != Old.DateOfBirth)
    {
        var exists = Connection.Exists<PatientRow>(
            new Criteria("FullName") == Row.FullName &
            new Criteria("DateOfBirth") == Row.DateOfBirth);
            
        if (exists)
            throw new ValidationError("PatientAlreadyExists", "A patient with the same name and date of birth already exists.");
    }
}
```
- Implemented database-level validation to prevent duplicates
- Used criteria to check for existing records.

### 20. Translated Validation Messages for User Clarity
```csharp
public static class SiteValidationTexts
{
    public static LocalText PatientAlreadyExists = "A patient with the same name and date of birth already exists.";
    public static LocalText CostMustBePositive = "Cost must be greater than zero.";
    public static LocalText LoyaltyYearsMustBePositive = "Loyalty Years must be greater than zero.";
}
```
- Created a validation texts class
- Implemented internationalization for validation messages.

### 21. Filtering the Patients Grid to Display Only Male Patients
```csharp
protected override void ApplyFilters(SqlQuery query)
{
    base.ApplyFilters(query);
    
    // Add filter to show only male patients
    query.Where(PatientsRow.Fields.Gender == (int)Gender.Male);
}
```
- Implemented `ApplyFilters()` in `PatientsListHandler.cs`
- Added a WHERE clause to filter records by gender.

### 22. Restricting User Access to Editing Only One Specific Patient
```csharp
protected override void PrepareQuery(SqlQuery query)
{
    base.PrepareQuery(query);
    
    // User can only edit specific patient (e.g. ID 5 or with name "John Doe")
    if (!Authorization.HasPermission(PermissionKeys.Patients.Admin))
    {
        query.Where(
            new Criteria(PatientsRow.Fields.PatientId) == 5 |
            new Criteria(PatientsRow.Fields.FullName) == "John Doe"
        );
    }
}
```
- Overrode the `PrepareQuery()` method to restrict access
- Applied a WHERE clause based on PatientId or Name.

### 23. Applying Different Background Colors to Male and Female Patients in the Grid
```typescript
protected getItemCssClass(item: PatientsRow, index: number): string {
    let gender = item.Gender;
    
    if (gender === Gender.Male)
        return "male-patient-row";
    else if (gender === Gender.Female)
        return "female-patient-row";
        
    return "";
}
```
```css
.male-patient-row {
    background-color: #e8f4ff;
}

.female-patient-row {
    background-color: #fff0f5;
}
```
- Implemented `getItemCssClass()` to assign gender-specific CSS classes
- Created styles for visual differentiation between genders.

### 24. Dynamically Requiring and Displaying the Address Field Based on Gender Selection
```typescript
private updateAddressFieldVisibility(): void {
    let gender = this.form.Gender.value;
    
    if (gender === Gender.Male) {
        // Make Address required and visible for male patients
        Serenity.EditorUtils.setRequired(this.form.Address, true);
        this.form.Address.element.closest('.field').show();
    } else {
        // Make Address optional and hidden for female patients
        Serenity.EditorUtils.setRequired(this.form.Address, false);
        this.form.Address.element.closest('.field').hide();
    }
}

constructor() {
    super();
    
    // Listen for gender changes
    this.form.Gender.changeSelect2(e => {
        this.updateAddressFieldVisibility();
    });
}

protected afterLoadEntity() {
    super.afterLoadEntity();
    
    // Update field visibility based on current gender
    this.updateAddressFieldVisibility();
}
```
- Created a method to update the Address field's visibility and requirement
- Added event handlers to respond to gender selection changes.

### 25. Adding a "Other" Option in Gender Enum and Disabling It
```csharp
[EnumKey("Patients.Gender")]
public enum Gender {
    [Description("Male")]
    Male = 1,
    [Description("Female")]
    Female = 2,
    [Description("Other")]
    Other = 3
}
```
```typescript
protected afterLoadEntity() {
    super.afterLoadEntity();
    
    // Disable the "Other" option in Gender dropdown
    this.form.Gender.items.forEach(item => {
        if (item.id === Gender.Other.toString()) {
            item.disabled = true;
        }
    });
}
```
- Added an "Other" option to the Gender enum
- Used TypeScript to disable the option in the dropdown.

### 26. Toggle Read-Only Mode for Patients Form
```typescript
protected getToolbarButtons(): Serenity.ToolButton[] {
    let buttons = super.getToolbarButtons();
    
    buttons.push({
        title: "Toggle Read-Only Mode",
        cssClass: "toggle-readonly-button",
        icon: "fa fa-lock",
        onClick: () => {
            this.toggleReadOnly();
        }
    });
    
    return buttons;
}

private isReadOnly = false;

private toggleReadOnly(): void {
    this.isReadOnly = !this.isReadOnly;
    
    // Toggle each editor's read-only state
    Object.keys(this.form).forEach(key => {
        let editor = this.form[key];
        if (editor && editor.element) {
            editor.readOnly = this.isReadOnly;
        }
    });
    
    // Update button icon
    let button = this.toolbar.findButton("toggle-readonly-button");
    button.toggleClass("fa-lock", this.isReadOnly);
    button.toggleClass("fa-unlock", !this.isReadOnly);
    
    // Disable/enable other buttons
    this.toolbar.findButton("save-and-close-button").toggleClass("disabled", this.isReadOnly);
    this.toolbar.findButton("apply-changes-button").toggleClass("disabled", this.isReadOnly);
    this.toolbar.findButton("delete-button").toggleClass("disabled", this.isReadOnly);
}
```
- Added a button to toggle read-only mode
- Implemented a method to update all form fields and buttons accordingly.

### 27. Create Gender-Specific Tabs in the Patients Grid
```typescript
protected createToolbarExtensions(): void {
    super.createToolbarExtensions();
    
    // Add tab container
    let tabs = $("<div class='patient-tabs'></div>")
        .insertBefore(this.slickGrid.element);
        
    // Add tab list
    let tabList = $("<ul class='tab-list'></ul>").appendTo(tabs);
    
    // Add tab items
    this.addTab(tabList, "male", "Male Patients", true);
    this.addTab(tabList, "female", "Female Patients", false);
    this.addTab(tabList, "all", "All Patients", false);
    
    // Handle tab switching
    tabList.find("li").on("click", e => {
        let target = $(e.target).closest("li");
        let tabKey = target.data("tab-key");
        
        // Update active state
        tabList.find("li").removeClass("active");
        target.addClass("active");
        
        // Apply filter based on selected tab
        switch (tabKey) {
            case "male":
                this.setFilter(GenderFilter, Gender.Male);
                break;
            case "female":
                this.setFilter(GenderFilter, Gender.Female);
                break;
            case "all":
                this.setFilter(GenderFilter, null);
                break;
        }
    });
}

private addTab(tabList: JQuery, key: string, title: string, isActive: boolean): void {
    $(`<li data-tab-key="${key}" class="${isActive ? 'active' : ''}">${title}</li>`)
        .appendTo(tabList);
}

private setFilter(filter: string, value: any): void {
    this.view.params.GenderFilter = value;
    this.refresh();
}
```
```css
.patient-tabs {
    margin-bottom: 15px;
}

.tab-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #ddd;
}

.tab-list li {
    padding: 8px 15px;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: none;
    margin-bottom: -1px;
}

.tab-list li.active {
    background-color: #fff;
    border-color: #ddd;
    border-bottom-color: #fff;
    font-weight: bold;
}
```
- Implemented a tabbed interface for the Patients grid
- Created methods to handle tab switching and filtering.

### 28. Filter Patients Lookup in Medical Records Form
```csharp
[DisplayName("Patient"), NotNull, ForeignKey("Patients", "PatientId"), LeftJoin("p")]
[LookupEditor(typeof(PatientsRow), FilterField = "Gender", FilterValue = 1)]
public int? PatientId { get; set; }
```
- Used the `FilterField` and `FilterValue` properties of `LookupEditor`
- Set the filter to show only male patients (Gender = 1).


## 🚀 Getting Started

To apply these solutions in your Serenity project:

1. **Prerequisites**
   - Visual Studio 2019 or higher
   - .NET 5.0 or higher
   - SQL Server 2016 or higher
   - Node.js 14.x or higher

2. **Setup**
   ```bash
   # Install Sergen CLI globally
   dotnet tool install -g sergen
   
   # Create a new Serenity project
   dotnet new serenity
   
   # Restore packages
   dotnet restore
   npm install
   
   # Configure your connection string in appsettings.json
   # Then run the project
   dotnet run
   ```

3. **Database Setup**
   - Execute the SQL scripts from the `Scripts` folder to create the database schema
   - Update the connection string in `appsettings.json`

4. **Build and Run**
   ```bash
   dotnet build
   dotnet run
   ```

## 💡 Contributing

Contributions are welcome! If you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Seif Abd Al-Azem**
- 🌐 [GitHub](https://github.com/yourusername)
- 📧 [Email](mailto:your.email@example.com)
- 💼 [LinkedIn](https://linkedin.com/in/yourusername)

---

<p align="center">Made with ❤️ for Serenity.is enthusiasts</p>

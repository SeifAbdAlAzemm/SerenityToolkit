import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { PatientsColumns, PatientsRow, PatientsService } from '../../ServerTypes/Hosbital';
import { PatientsDialog } from './PatientsDialog';
import { localText } from '@serenity-is/corelib';
import * as Q from "@serenity-is/corelib";
import "./PatientsGrid.css";
import jQuery from 'jquery';
import { Gender } from '../../ServerTypes/Modules';

@Decorators.registerClass('HosbitalSerenity.Hosbital.PatientsGrid')
export class PatientsGrid extends EntityGrid<PatientsRow> {
    protected getColumnsKey() { return PatientsColumns.columnsKey; }
    protected getDialogType() { return PatientsDialog; }
    protected getRowDefinition() { return PatientsRow; }
    protected getService() { return PatientsService.baseUrl; }

    protected getQuickSearchFields(): QuickSearchField[] {
        const txt = s => localText(`Db.${PatientsRow.localTextPrefix}.${s}`);
        const flds = PatientsRow.Fields;

        return [
            { name: "", title: "All" },
            { name: flds.PatientName, title: txt(flds.PatientName) },
            { name: flds.Age, title: txt(flds.Age) },
            { name: flds.GovName, title: txt(flds.GovName) },
            { name: flds.CityName, title: txt(flds.CityName) }
        ];
    }

    protected getItemCssClass(item: PatientsRow, index: number): string {
        var klass: string = "";
        if (item.Gender == 1)
            klass += "male-patient";
        else
            klass += "female-patient";

        return Q.trimToNull(klass);
    }

    protected createToolbarExtensions() {
        super.createToolbarExtensions();

        let tabs = jQuery('<div class="custom-tabs-container"/>');
        let tabsUl = jQuery('<ul class="nav"/>').appendTo(tabs);

        this.addTab(tabsUl, 'AllPatients', 'All Patients');
        this.addTab(tabsUl, 'MalePatients', 'Male Patients');
        this.addTab(tabsUl, 'FemalePatients', 'Female Patients');

        tabsUl.on('click', 'li a', (e) => {
            e.preventDefault();
            let tab = jQuery(e.target).attr('href')?.substring(1);
            if (tab) {
                this.handleTabChange(tab);
                tabsUl.find('li').removeClass('active');
                jQuery(e.target).parent().addClass('active');
            }
        });

        tabsUl.find('li:first').addClass('active');

        tabs.appendTo(this.toolbar.element);
    }


    private addTab(tabsUl: JQuery, id: string, title: string) {
        jQuery('<li/>').append(
            jQuery('<a/>')
                .attr('href', '#' + id)
                .text(title)
        ).appendTo(tabsUl);
    }


    private handleTabChange(tab: string) {
        const request = this.view.params as Q.ListRequest;
        request.EqualityFilter = request.EqualityFilter || {};

        switch (tab) {
            case 'MalePatients':
                request.EqualityFilter['Gender'] = Gender.Male;
                break;
            case 'FemalePatients':
                request.EqualityFilter['Gender'] = Gender.Female;
                break;
            default:
                delete request.EqualityFilter['Gender'];
                break;
        }

        this.refresh();
    }

}
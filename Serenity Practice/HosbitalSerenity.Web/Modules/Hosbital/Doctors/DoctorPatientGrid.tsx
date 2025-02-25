import { Decorators, EntityGrid, WidgetProps } from "@serenity-is/corelib";
import { MedicalRecordsRow, MedicalRecordsService } from "../../ServerTypes/Hosbital";
import { DoctorPatientColumns } from "../../ServerTypes/Modules";

@Decorators.registerEditor("HosbitalSerenity.Hosbital.DoctorPatientGrid")
export class DoctorPatientGrid<P = {}> extends EntityGrid<MedicalRecordsRow, P> {
    protected getColumnsKey() { return DoctorPatientColumns.columnsKey; }
    protected getRowDefinition() { return MedicalRecordsRow; }
    protected getService() { return MedicalRecordsService.baseUrl; }

    constructor(props: WidgetProps<P>) {
        super(props);
    }

    protected getButtons() {
        return null;
    }

    protected getInitialTitle() {
        return null;
    }

    protected usePager() {
        return false;
    }

    protected getGridCanLoad() {
        return this.doctorId != null;
    }

    private _doctorId: number;

    get doctorId() {
        return this._doctorId;
    }

    set doctorId(value: number) {
        if (this._doctorId != value) {
            this._doctorId = value;
            this.setEquality(MedicalRecordsRow.Fields.DoctorId, value);
            this.refresh();
        }
    }
}
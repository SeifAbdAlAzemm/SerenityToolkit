import { Authorization, Decorators, EntityGrid } from "@serenity-is/corelib";
import { Lookup, resolveUrl, tryFirst } from "@serenity-is/corelib";
import { UserDialog } from "./UserDialog";
import { UserRow, UserColumns, UserService, RoleRow } from "../../ServerTypes/Administration";
import * as Q from "@serenity-is/corelib";
import { ImpersonateUserDialog } from "./ImpersonateUserDialog";

@Decorators.registerClass()
export class UserGrid extends EntityGrid<UserRow, any> {
    protected getColumnsKey() { return UserColumns.columnsKey; }
    protected getDialogType() { return UserDialog; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getService() { return UserService.baseUrl; }

    constructor(props: any) {
        super(props);
    }

    protected override getDefaultSortBy() {
        return [UserRow.Fields.Username];
    }

    protected override createIncludeDeletedButton() {
    }

    protected override getColumns() {
        var columns = super.getColumns();

        var roles = tryFirst(columns, x => x.field == UserRow.Fields.Roles);
        if (roles) {
            var rolesLookup: Lookup<RoleRow>;
            RoleRow.getLookupAsync().then(lookup => {
                rolesLookup = lookup;
                this.slickGrid.invalidate();
            });

            roles.format = ctx => {
                if (!rolesLookup)
                    return `<i class="fa fa-spinner"></i>`;

                var roleList = (ctx.value || []).map(x => (rolesLookup.itemById[x] || {}).RoleName || "");
                roleList.sort();
                return roleList.join(", ");
            };
        }

        return columns;
    }

    protected getButtons() {
        let buttons = super.getButtons();
        var dlg = new ImpersonateUserDialog();
        if (Authorization.hasPermission("Administration:ImpersonateUser")) {
            buttons.push({
                title: "Impersonate",
                cssClass: "impersonate-button",
                icon: "fa-user-secret",
                onClick: () => {
                    dlg.dialogOpen();
                }
            });
        }

        return buttons;
    }

}

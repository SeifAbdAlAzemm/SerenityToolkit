import { Authorization, Decorators, EntityGrid } from "@serenity-is/corelib";
import { Lookup, resolveUrl, tryFirst } from "@serenity-is/corelib";
import * as Q from '@serenity-is/corelib';
import { UserDialog } from "./UserDialog";
import { UserRow, UserColumns, UserService, RoleRow } from "../../ServerTypes/Administration";
import type { JQuery } from "jquery"; 
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
        $(document).on("click", "[data-action=impersonate]", e => {
            const row = $(e.target).closest("[data-action=impersonate]").data("row");
            this.getImpersonatUser(e, row, 0); 
        });
    }

    protected override getDefaultSortBy() {
        return [UserRow.Fields.Username];
    }

    protected override createIncludeDeletedButton() {
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

        if (Q.Authorization.hasPermission("Administration:ImpersonateUser")) {
            var currentUserId: string | number = null;
            this.getAdminid().then(user => {
                currentUserId = user[0].UserId;
                this.slickGrid.invalidate();
            });

            columns.unshift({
                field: Q.text('Impersonate'),
                name: '',
                format: ctx => {
                    const item = this.itemAt(ctx.row);

                    if (item.UserId === currentUserId) {
                        return '<a class="inline-action " data-row="' + ctx.row +
                            '" "><i class="fa fa-chess-queen text-warning"></i></a>';
                    }
                    return '<a class="inline-action impersonate" data-action="impersonate" data-row="' + ctx.row +
                        '" title="Impersonate"><i class="fa fa-user-secret text-primary"></i></a>';
                },
                width: 1,
                minWidth: 12,
                maxWidth: 12
            });
        }

        return columns;
    }
   
    protected getUserDetails(userId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            UserService.Retrieve({
                EntityId: userId
            }, response => {
                resolve(response.Entity.Username);

            }, {
                onError: () => reject("Unknown User")
            });
        });
    }
    private getImpersonatUser(e: JQuery, row: number, cell: number) {
        e.preventDefault();

        const item = this.itemAt(row);
        const impersonateUserId = item.UserId; 

        if (!impersonateUserId) {
            Q.alert("Cannot determine user ID to impersonate.");
            return;
        }

        this.getUserDetails(Q.toId(impersonateUserId)).then(username => {
            Q.confirm(`Are you sure you want to impersonate user "${username}"?`, () => {
                Q.serviceRequest(
                    "Administration/ImpersonateUser/Impersonate",
                    { UserId: impersonateUserId },
                    response => {
                        Q.notifySuccess("Impersonation started successfully!");
                        setTimeout(() => {
                            location.href = "../../";
                            setTimeout(() => {
                                location.reload();
                            }, 500);
                        }, 1000);
                    }
                );
            });
        }).catch(() => {
            Q.alert("Failed to retrieve user details. Please check the User ID.");
        });
    }
    protected getAdminid(): Promise<UserRow[]> {

        return new Promise((resolve, reject) => {
            UserService.List(
                {
                    EqualityFilter: { Username: Authorization.userDefinition.Username }
                },
                response => {
                    resolve(response.Entities);
                },
                {
                    onError: () => reject("Invalid Admin Username")
                }
            );
        });
    }

    }

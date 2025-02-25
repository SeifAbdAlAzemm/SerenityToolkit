import { Decorators, EntityDialog } from "@serenity-is/corelib";
import { ImpersonateUserForm } from "../../ServerTypes/Modules";
import * as Q from "@serenity-is/corelib";
import { PermissionKeys, UserRow, UserService } from "../../ServerTypes/Administration";
import { Authorization } from "@serenity-is/corelib";

@Decorators.registerClass()
export class ImpersonateUserDialog extends EntityDialog<UserRow, any> {
    protected getFormKey() { return ImpersonateUserForm.formKey; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getNameProperty() { return UserRow.nameProperty; }
    protected getService() { return UserService.baseUrl; }

    protected form = new ImpersonateUserForm(this.idPrefix);

    constructor(props?: any) {
        super(props);
        this.form.ImperonatedUserId.changeSelect2(e => {

            if (this.form.ImperonatedUserId) {
                this.getUserDetails(Q.toId(this.form.ImperonatedUserId.value));
            }
        });
    }

    //protected afterLoadEntity() {
    //    super.afterLoadEntity();

    //}

    protected onDialogOpen() {
        super.onDialogOpen();
        this.addDisabledOption();
        
    }


    protected getToolbarButtons() {
        let buttons = super.getToolbarButtons();

        if (Q.Authorization.hasPermission(PermissionKeys.ImpersonateUser)) {
            buttons.push({
                title: "Impersonate",
                cssClass: "apply-impersonate",
                icon: "fa-user-secret",
                onClick: () => this.getImpersonatUser(),
            });

            return buttons;
        }
    }

    protected getUserDetails(userId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            UserService.Retrieve({
                EntityId: userId
            }, response => {
                resolve(response.Entity.Username);
                this.form.Username.value = response.Entity.Username;
                this.form.DisplayName.value = response.Entity.DisplayName;
                this.form.Email.value = response.Entity.Email;
            }, {
                onError: () => reject("Unknown User")
            });
        });
    }

    private getImpersonatUser() {
        let impersonateUserId = Q.toId(this.form.ImperonatedUserId.value);

        if (!impersonateUserId) {
            Q.alert("Please enter a valid User ID to impersonate.");
            return;
        }

        this.getUserDetails(impersonateUserId).then(username => {
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

    protected addDisabledOption() {

        this.getAdminid().then(adminDetails => {
            this.form.ImperonatedUserId.items.forEach(function (item) {
                if (Q.toId(item.id) == adminDetails[0].UserId) {
                    item.disabled = true;
                }
            });
        }).catch(() => {
            Q.alert("Failed to retrieve user admin id.");
        });
    }


}

export interface ScriptUserDefinition {
    UserId?: string;
    Username?: string;
    DisplayName?: string;
    IsAdmin?: boolean;
    Permissions?: { [key: string]: boolean };
}
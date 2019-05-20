import { Credential } from "./credential";

export class Password extends Credential
{
    constructor(password: string|null, oldPassword?: string|null) {
        super(Credential.Password,
            typeof oldPassword !== 'undefined'
                ? { oldPassword, newPassword: password }    // password change/reset
                : password                                  // password authentication
        );
    }
}

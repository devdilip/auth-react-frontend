export class UserLoginRequest {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export class UserLoginResponse {
    token: string;
    expires_in: string;
    expirytime: string;
    username: string;
}

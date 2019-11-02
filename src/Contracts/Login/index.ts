export class UserLoginRequest {
    userName: string;
    password: string;
    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
}

export class UserLoginResponse {
    token: string;
    expires_in: string;
    expirytime: string;
    userEmail: string;
}
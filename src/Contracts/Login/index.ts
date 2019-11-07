export class UserLoginRequest {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export class AccessToken {
    token: string;
    expires_in: string;
    expirytime: string;
    userName: string;
}

export class UserLoginResponse {
    access_token: string;
}

export class UserResponse {
    userName: string;
}
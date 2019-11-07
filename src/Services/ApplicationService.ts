import axios, { AxiosResponse } from 'axios';

import { postDataOptions } from './BackendService';
import { UserLoginRequest, UserLoginResponse } from '../Contracts/Login';
import { RegisterNewUserRequest, RegisterNewUserResponse } from '../Contracts/SignUp';

const loginUrl = '/auth/login';

export const getUserToken = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
    try {
        const response: any = await axios(postDataOptions(loginUrl, data, false));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};


export const registerUser = async (data: RegisterNewUserRequest): Promise<RegisterNewUserResponse> => {
    try {
        const response: any = await axios(postDataOptions(loginUrl, data, false));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

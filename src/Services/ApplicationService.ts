import axios, { AxiosResponse } from 'axios';

import { postDataOptions } from './BackendService';
import { UserLoginRequest, UserLoginResponse } from '../Contracts/Login';
import { RegisterNewUserRequest, RegisterNewUserResponse } from '../Contracts/SignUp';

const LOGIN_URL = '/auth/login';
const SIGNUP_URL = '/user/register';

export const getUserToken = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
    try {
        const response: any = await axios(postDataOptions(LOGIN_URL, data, false));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};


export const registerUser = async (data: RegisterNewUserRequest): Promise<RegisterNewUserResponse> => {
    try {
        const response: any = await axios(postDataOptions(SIGNUP_URL, data, false));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

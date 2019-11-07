import axios, { AxiosResponse } from 'axios';
import * as jwtDecode from 'jwt-decode';


import { postDataOptions } from './BackendService';
import { UserLoginRequest, UserLoginResponse, UserResponse } from '../Contracts/Login';
import { RegisterNewUserRequest, RegisterNewUserResponse } from '../Contracts/SignUp';
import { AppLocalStorage, AppStorageKeys } from '../Contracts';

const LOGIN_URL = '/auth/login';
const SIGNUP_URL = '/user/register';

export const getUserToken = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
    try {
        const response: AxiosResponse<UserLoginResponse> = await axios(postDataOptions(LOGIN_URL, data, false));
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


export const getTokenUserName = () => {
    const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true);
    if (token && token.access_token) {
        const decode: UserResponse = jwtDecode(token.access_token) as UserResponse;
        return decode.userName;
    }
    return null;
};
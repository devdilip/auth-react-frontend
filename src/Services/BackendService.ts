import { AppLocalStorage, AppStorageKeys, AppHttpHeadersOptions } from '../Contracts';
import { UserLoginResponse } from '../Contracts/Login';

const BASE_APP_URL: string | undefined = process.env.REACT_APP_BASE_MERCHANT_URL;

const setHeaders = (urlEncodedForm: boolean) => {
    const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
    const additionalHeaders = {};
    if (urlEncodedForm) {
        additionalHeaders['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    } else {
        additionalHeaders['Content-Type'] = 'application/json';
        additionalHeaders['Accept'] = 'application/json';
    }
    additionalHeaders['Cache-Control'] = 'no-cache';
    additionalHeaders['Pragma'] = 'no-cache';
    if (token && token.token) {
        additionalHeaders['token'] = token.token;
    }
    return additionalHeaders;
};

export const getDataOptions = (url: string, urlEncoded = false): AppHttpHeadersOptions => {
    const options: AppHttpHeadersOptions = new AppHttpHeadersOptions('get', BASE_APP_URL, url);
    const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
    options.headers = setHeaders(urlEncoded);
    return options;
};


export const postDataOptions = (url: string, data: any = null, urlEncoded = false): AppHttpHeadersOptions => {
    const options: AppHttpHeadersOptions = new AppHttpHeadersOptions('post', BASE_APP_URL, url);
    const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
    if (data) {
        options.data = data;
    }
    options.headers = setHeaders(urlEncoded);
    return options;
};


export const patchDataOptions = (url: string, data: any = null, urlEncoded = false): AppHttpHeadersOptions => {
    const options: AppHttpHeadersOptions = new AppHttpHeadersOptions('patch', BASE_APP_URL, url);
    const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
    if (data) {
        options.data = data;
    }
    options.headers = setHeaders(urlEncoded);
    return options;
};

export const removeEscapeSlashes = (stringWithEscapedCharacters: string): string => {
    return stringWithEscapedCharacters.replace(/\\"/g, '').replace(/"/g, '');
};
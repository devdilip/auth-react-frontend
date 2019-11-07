import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { AppLocalStorage, AppStorageKeys } from '../../Contracts';
import { AppRoute } from '../../Routing';
import { UserLoginResponse } from '../../Contracts/Login';

export const AuthenticationGuard = (Component) => {
    return class AuthenticationGuard extends React.Component {
        render() {
            let tokenExists = false;
            const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
            if (token && token.access_token && token.access_token.length > 0) {
                tokenExists = true;
            }
            return tokenExists ? <Component {...this.props} /> : <Redirect to={AppRoute.Login} />;
        }
    };
};
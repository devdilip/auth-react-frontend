import * as React from 'react';
import { connect } from 'react-redux';

import { WrappingComponent } from '../../../Components/HigherOrderComponents/WrappingComponent';


import EmailPasswordLoginForm from '../EmailPasswordLoginForm';
import { AppLocalStorage, AppStorageKeys } from '../../../Contracts';
import { getUserToken } from '../../../Services/ApplicationService';
import { UserLoginRequest, UserLoginResponse } from '../../../Contracts/Login';
import { AppRoute } from '../../../Routing';
import { LoginActionCreators } from '../../../Actions/Login';
import { HttpStatusGuard } from '../../../Services/RouteGuards/HttpStatusGuard';


export interface History {
    push: (pathName: string) => void;
}

export interface Props {
    history: any;
    email: string;
    password: string;
    isLoading: boolean;
    emailChanged: (email: string | null) => void;
    passwordChanged: (password: string | null) => void;
    loginRequested: () => void;
    loginFulfilled: () => void;
    loginRejected: () => void;
    showInlineButtonLoader: () => void;
    hideInlineButtonLoader: () => void;
}

class LoginForm extends React.Component<Props, { }> {

    constructor(props: Props) {
        super(props);
        const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
        if (token && token.access_token) {
            this.props.history.push(AppRoute.Profile);
        }
    }

    render() {
        return (
            <WrappingComponent>
                <EmailPasswordLoginForm
                    defaultEmail={this.props.email}
                    email={this.props.email}
                    password={this.props.password}
                    onEmailChange={($event) => this.onEmailChange($event.target.value)}
                    onPasswordChange={($event) => this.onPasswordChange($event.target.value)}
                    isLoading={this.props.isLoading}
                    authenticate={() => this.authenticate()}
                />
            </WrappingComponent>
        );
    }

    onEmailChange = (email: string) => {
        AppLocalStorage.save(AppStorageKeys.AppEmail, email);
        this.props.emailChanged(email);
    }

    onPasswordChange = (password: string) => {
        this.props.passwordChanged(password);
    }

    authenticate = async () => {
        this.props.showInlineButtonLoader();
        this.props.loginRequested();
        const data: UserLoginRequest = new UserLoginRequest(this.props.email, this.props.password);
        await getUserToken(data).then(response => {
            console.log(response);
            AppLocalStorage.save(AppStorageKeys.AppToken, response);
            this.props.loginFulfilled();
            this.props.hideInlineButtonLoader();
            this.props.history.push(AppRoute.Profile);
        }).catch(error => {
            console.log(error);
            this.props.loginRejected();
            this.props.hideInlineButtonLoader();
            this.props.history.push(AppRoute.AccountNotFound);
        });
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        password: state.login.password,
        isLoading: state.login.isLoading,
        isAuthenticated: state.login.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showInlineButtonLoader: () => dispatch(LoginActionCreators.showInlineButtonLoader()),
        hideInlineButtonLoader: () => dispatch(LoginActionCreators.hideInlineButtonLoader()),
        emailChanged: (email: string | null) => dispatch(LoginActionCreators.emailChanged(email)),
        passwordChanged: (password: string | null) => dispatch(LoginActionCreators.passwordChanged(password)),
        loginRequested: () => dispatch(LoginActionCreators.loginRequested()),
        loginFulfilled: () => dispatch(LoginActionCreators.loginFulfilled()),
        loginRejected: () => dispatch(LoginActionCreators.loginRejected())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HttpStatusGuard(LoginForm));
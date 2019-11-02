import * as React from 'react';

import { WrappingComponent } from '../../../Components/HigherOrderComponents/WrappingComponent';


import EmailPasswordLoginForm from '../EmailPasswordLoginForm';
import { AppLocalStorage, AppStorageKeys } from '../../../Contracts';

export interface History {
    push: (pathName: string) => void;
}

export interface Props {
    history: any;
    email: string;
    password: string;
    isLoading: boolean;
    emailChanged: (email: string | null) => void;
    passwordChanged: (email: string | null) => void;
    loginRequested: () => void;
    loginFulfilled: () => void;
    loginRejected: () => void;
    showInlineButtonLoader: () => void;
    hideInlineButtonLoader: () => void;
}

export class LoginForm extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        
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

    userEmail = () => {
        return AppLocalStorage.get(AppStorageKeys.AppEmail, true);
    }

    onEmailChange = (email: string) => {
        AppLocalStorage.save(AppStorageKeys.AppEmail, email);
        console.log(email)
    }

    onPasswordChange = (password: string) => {
        console.log(password);
    }

    authenticate = async () => {
        this.props.showInlineButtonLoader();
        this.props.loginRequested();
    }
}

export default (LoginForm);
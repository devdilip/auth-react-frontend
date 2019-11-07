import * as React from 'react';
import { connect } from 'react-redux';

import { WrappingComponent } from '../../Components/HigherOrderComponents/WrappingComponent';

import SignUpForm from './SignUpForm';
import { RegisterNewUserRequest } from '../../Contracts/SignUp';
import { registerUser } from '../../Services/ApplicationService';
import { UserLoginResponse } from '../../Contracts/Login';
import { AppLocalStorage, AppStorageKeys } from '../../Contracts';
import { AppRoute } from '../../Routing';
import { SignUpActionCreators } from '../../Actions/SignUp';

export interface History {
    push: (pathName: string) => void;
}

export interface Props {
    history: any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isLoading: boolean;
    isAuthenticated: boolean;
    emailChanged: (email: string | null) => void;
    firstNameChanged: (firstName: string | null) => void;
    lastNameChanged: (lastName: string | null) => void;
    passwordChanged: (password: string | null) => void;
    signUpRequested: () => void;
    signUpFulfilled: () => void;
    signUpRejected: () => void;
    showInlineButtonLoader: () => void;
    hideInlineButtonLoader: () => void;
}

class SighUp extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
        if (token) {
            this.props.history.push(AppRoute.Profile);
        }
    }

    render() {
        return (
            <WrappingComponent>
                <SignUpForm
                    defaultEmail={this.props.email}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    password={this.props.password}
                    firstNameChanged={($event) => this.firstNameChanged($event.target.value)}
                    lastNameChanged={($event) => this.lastNameChanged($event.target.value)}
                    onEmailChange={($event) => this.onEmailChange($event.target.value)}
                    onPasswordChange={($event) => this.onPasswordChange($event.target.value)}
                    isLoading={this.props.isLoading}
                    register={() => this.register()}
                    isSuccess={this.props.isAuthenticated}

                />
            </WrappingComponent>
        );
    }

    register = async () => {
        this.props.showInlineButtonLoader();
        this.props.signUpRequested();
        const data: RegisterNewUserRequest = new RegisterNewUserRequest(this.props.firstName, this.props.lastName, this.props.email, this.props.password);
        await registerUser(data).then(response => {
            console.log(response);
            this.props.signUpFulfilled();
            this.props.hideInlineButtonLoader();
            setTimeout(() => {
                this.props.history.push(AppRoute.Login);
           }, 1000);
        }).catch(error => {
            console.log(error);
            this.props.signUpRejected();
            this.props.hideInlineButtonLoader();
        });
    }

    firstNameChanged = (fName: string) => {
        this.props.firstNameChanged(fName);
    }
    lastNameChanged = (lName: string) => {
        this.props.lastNameChanged(lName);
    }
    onEmailChange = (email: string) => {
        this.props.emailChanged(email);
    }

    onPasswordChange = (password: string) => {
        this.props.passwordChanged(password);
    }

}

const mapStateToProps = (state) => {
    return {
        firstName: state.signUp.firstName,
        lastName: state.signUp.lastName,
        email: state.signUp.email,
        password: state.signUp.password,
        isLoading: state.signUp.isLoading,
        isAuthenticated: state.signUp.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showInlineButtonLoader: () => dispatch(SignUpActionCreators.showInlineButtonLoader()),
        hideInlineButtonLoader: () => dispatch(SignUpActionCreators.hideInlineButtonLoader()),
        firstNameChanged: (firstName: string | null) => dispatch(SignUpActionCreators.firstNameChanged(firstName)),
        lastNameChanged: (lastName: string | null) => dispatch(SignUpActionCreators.lastNameChanged(lastName)),
        emailChanged: (email: string | null) => dispatch(SignUpActionCreators.emailChanged(email)),
        passwordChanged: (password: string | null) => dispatch(SignUpActionCreators.passwordChanged(password)),
        signUpRequested: () => dispatch(SignUpActionCreators.signUpRequested()),
        signUpFulfilled: () => dispatch(SignUpActionCreators.signUpFulfilled()),
        signUpRejected: () => dispatch(SignUpActionCreators.signUpRejected())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SighUp);

import * as React from 'react';

import { WrappingComponent } from '../../Components/HigherOrderComponents/WrappingComponent';


import SignUpForm from './SignUpForm';

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
    emailChanged: (email: string | null) => void;
    firstNameChanged: (firstName: string | null) => void;
    lastNameChanged: (lastName: string | null) => void;
    passwordChanged: (password: string | null) => void;
    loginRequested: () => void;
    loginFulfilled: () => void;
    loginRejected: () => void;
    showInlineButtonLoader: () => void;
    hideInlineButtonLoader: () => void;
}

export class SighUp extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);

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

                />
            </WrappingComponent>
        );
    }

    register = () => {
        
    }
    firstNameChanged = (fName: string) => {
        console.log(fName)
    }
    lastNameChanged = (lName: string) => {
        console.log(lName)
    }
    onEmailChange = (email: string) => {
        console.log(email)
    }

    onPasswordChange = (password: string) => {
        console.log(password);
    }


}

export default (SighUp);
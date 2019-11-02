import * as React from 'react';
import { Avatar, CssBaseline, Paper, Typography, withStyles } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';



import ProcessButton from '../../../Components/UI/Button';

import { LoginStyle } from './LoginFormStyles';
import { InputField } from '../../../Components/UI/Input';

export interface History {
    push: (pathName: string) => void;
}

export interface Props {
    defaultEmail: string;
    isLoading: boolean;
    email: string;
    password: string;
    onEmailChange: ($event) => void;
    onPasswordChange: ($event) => void;
    authenticate: () => void;
    classes?: any;
}

const EmailPasswordLoginForm = (props: Props) => {

    const authenticate = (event) => {
        event.preventDefault();
        props.authenticate();
    };

    const { classes } = props;
    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <InputField
                        defaultInputValue={props.defaultEmail}
                        inputOnChange={($event) => props.onEmailChange($event)}
                        labelText="Email Address"
                        inputId="email-id"
                    />
                    <InputField
                        inputOnChange={($event) => props.onPasswordChange($event)}
                        labelText="Password"
                        inputId="pwd"
                        inputType="password"
                    />
                    <ProcessButton
                        buttonClass={classes.submit}
                        buttonType="submit"
                        buttonText="Process"
                        isLoading={props.isLoading}
                        isDisabled={!(props.email && props.email.length >= 5 && props.password.length >= 4)}
                        buttonOnClick={authenticate}
                    />
                </form>
            </Paper>
        </main>
    );
};

export default withStyles(LoginStyle)(EmailPasswordLoginForm);

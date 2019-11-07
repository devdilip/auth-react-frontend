import * as React from 'react';
import ProcessButton from '../../../Components/UI/Button';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Avatar, CssBaseline, Typography, withStyles,
    Grid, Container, Link
} from '@material-ui/core';


import { InputField } from '../../../Components/UI/Input';
import { SighUpFormStyle } from './SignUpFormStyles';


export interface Props {
    defaultEmail: string;
    isLoading: boolean;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    firstNameChanged: ($event) => void;
    lastNameChanged: ($event) => void;
    onEmailChange: ($event) => void;
    onPasswordChange: ($event) => void;
    classes?: any;
    register: () => void;
}

const SignUpForm = (props: Props) => {

    const register = (event) => {
        event.preventDefault();
        props.register();
    };

    const { classes } = props;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputField
                                inputOnChange={($event) => props.firstNameChanged($event)}
                                labelText="First Name"
                                inputId="first-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputField
                                inputOnChange={($event) => props.lastNameChanged($event)}
                                labelText="Last Name"
                                inputId="last-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField
                                inputOnChange={($event) => props.onEmailChange($event)}
                                labelText="Email Address"
                                inputId="email-id"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputField
                                inputOnChange={($event) => props.onPasswordChange($event)}
                                labelText="Password"
                                inputId="pwd"
                                inputType="password"
                            />
                        </Grid>
                    </Grid>
                    <ProcessButton
                        buttonClass={classes.submit}
                        buttonType="submit"
                        buttonText="Sign Up"
                        isLoading={props.isLoading}
                        // isDisabled={!(props.email && props.email.length >= 5 && props.password.length >= 4)}
                        buttonOnClick={register}
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default withStyles(SighUpFormStyle)(SignUpForm);

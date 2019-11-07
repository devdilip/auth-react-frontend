import * as React from 'react';
import { Avatar, CssBaseline, Typography, withStyles, Grid, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ProcessButton from '../../../Components/UI/Button';
import { Link } from "react-router-dom";
import { LoginStyle } from './LoginFormStyles';
import { InputField } from '../../../Components/UI/Input';
import { AppRoute } from '../../../Routing';

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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
            </Typography>
                <form className={classes.form} noValidate>
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
                        isDisabled={!(props.email  && props.password)}
                        buttonOnClick={authenticate}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link to={'#'}>
                                {"Forgot Password"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={AppRoute.Register}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default withStyles(LoginStyle)(EmailPasswordLoginForm);

import * as React from 'react';
import { Avatar, CssBaseline, Typography, withStyles, Grid, Container, FormControlLabel, Checkbox, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <ProcessButton
                        buttonClass={classes.submit}
                        buttonType="submit"
                        buttonText="Process"
                        isLoading={props.isLoading}
                        // isDisabled={!(props.email && props.email.length >= 5 && props.password.length >= 4)}
                        buttonOnClick={authenticate}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
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

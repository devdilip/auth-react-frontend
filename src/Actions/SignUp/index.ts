export const SignUpActions = {
    SHOW_INLINE_BUTTON_LOADER: 'SHOW_INLINE_BUTTON_LOADER',
    HIDE_INLINE_BUTTON_LOADER: 'HIDE_INLINE_BUTTON_LOADER',
    SIGNUP_REQUESTED: 'SIGNUP_REQUESTED',
    SIGNUP_FULFILLED: 'SIGNUP_FULFILLED',
    SIGNUP_REJECTED: 'SIGNUP_REJECTED',
    FIRSTNAME_CHANGED: 'FIRSTNAME_CHANGED',
    LASTNAME_CHANGED: 'LASTNAME_CHANGED',
    EMAIL_CHANGED: 'EMAIL_CHANGED',
    PASSWORD_CHANGED: 'PASSWORD_CHANGED'
};

export const SignUpActionCreators = {
    showInlineButtonLoader: () => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.SHOW_INLINE_BUTTON_LOADER
            });
        };
    },
    hideInlineButtonLoader: () => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.HIDE_INLINE_BUTTON_LOADER
            });
        };
    },
    firstNameChanged: (firstNameValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.FIRSTNAME_CHANGED,
                firstName: firstNameValue
            });
        };
    },
    lastNameChanged: (lastNameValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.LASTNAME_CHANGED,
                lastName: lastNameValue
            });
        };
    },
    emailChanged: (emailValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.EMAIL_CHANGED,
                email: emailValue
            });
        };
    },
    passwordChanged: (passwordValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.PASSWORD_CHANGED,
                password: passwordValue
            });
        };
    },
    signUpRequested: () => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.SIGNUP_REQUESTED
            });
        };
    },
    signUpFulfilled: () => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.SIGNUP_FULFILLED
            });
        };
    },
    signUpRejected: () => {
        return (dispatch) => {
            dispatch({
                type: SignUpActions.SIGNUP_REJECTED
            });
        };
    }
};
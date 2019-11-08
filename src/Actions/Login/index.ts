export const LoginActions = {
    SHOW_INLINE_BUTTON_LOADER: 'SHOW_INLINE_BUTTON_LOADER',
    HIDE_INLINE_BUTTON_LOADER: 'HIDE_INLINE_BUTTON_LOADER',
    LOGIN_REQUESTED: 'LOGIN_REQUESTED',
    LOGIN_FULFILLED: 'LOGIN_FULFILLED',
    LOGIN_REJECTED: 'LOGIN_REJECTED',
    EMAIL_CHANGED: 'EMAIL_CHANGED',
    PASSWORD_CHANGED: 'PASSWORD_CHANGED'
};

export const LoginActionCreators = {
    showInlineButtonLoader: () => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.SHOW_INLINE_BUTTON_LOADER
            });
        };
    },
    hideInlineButtonLoader: () => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.HIDE_INLINE_BUTTON_LOADER
            });
        };
    },
    emailChanged: (emailValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.EMAIL_CHANGED,
                email: emailValue
            });
        };
    },
    passwordChanged: (passwordValue: string | null) => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.PASSWORD_CHANGED,
                password: passwordValue
            });
        };
    },
    loginRequested: () => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.LOGIN_REQUESTED
            });
        };
    },
    loginFulfilled: () => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.LOGIN_FULFILLED
            });
        };
    },
    loginRejected: () => {
        return (dispatch) => {
            dispatch({
                type: LoginActions.LOGIN_REJECTED
            });
        };
    }
};
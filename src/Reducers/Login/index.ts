import { LoginActions } from '../../Actions/Login';
import { updateObjectImmutably } from '../utility';

const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isAuthenticated: false
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginActions.SHOW_INLINE_BUTTON_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: true
            });
        }
        case LoginActions.HIDE_INLINE_BUTTON_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: false
            });
        }
        case LoginActions.EMAIL_CHANGED: {
            return updateObjectImmutably(state, {
                email: action.email
            });
        }
        case LoginActions.PASSWORD_CHANGED: {
            return updateObjectImmutably(state, {
                password: action.password
            });
        }
        case LoginActions.LOGIN_REQUESTED: {
            return updateObjectImmutably(state, {
                isAuthenticated: false
            });
        }
        case LoginActions.LOGIN_FULFILLED: {
            return updateObjectImmutably(state, {
                isAuthenticated: true,
            });
        }
        case LoginActions.LOGIN_REJECTED: {
            return updateObjectImmutably(state, {
                isAuthenticated: false
            });
        }
        default: {
            return state;
        }
    }
};
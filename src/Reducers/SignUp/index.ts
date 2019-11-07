import { SignUpActions } from '../../Actions/SignUp';

import { updateObjectImmutably } from '../utility';

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    isLoading: false,
    isAuthenticated: false
};

export const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SignUpActions.SHOW_INLINE_BUTTON_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: true
            });
        }
        case SignUpActions.HIDE_INLINE_BUTTON_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: false
            });
        }
        case SignUpActions.FIRSTNAME_CHANGED: {
            return updateObjectImmutably(state, {
                firstName: action.firstName
            });
        }
        case SignUpActions.LASTNAME_CHANGED: {
            return updateObjectImmutably(state, {
                lastName: action.lastName
            });
        }
        case SignUpActions.EMAIL_CHANGED: {
            return updateObjectImmutably(state, {
                email: action.email
            });
        }
        case SignUpActions.PASSWORD_CHANGED: {
            return updateObjectImmutably(state, {
                password: action.password
            });
        }
        case SignUpActions.SIGNUP_REQUESTED: {
            return updateObjectImmutably(state, {
                isAuthenticated: false
            });
        }
        case SignUpActions.SIGNUP_FULFILLED: {
            return updateObjectImmutably(state, {
                isAuthenticated: true,
            });
        }
        case SignUpActions.SIGNUP_REJECTED: {
            return updateObjectImmutably(state, {
                isAuthenticated: false
            });
        }
        default: {
            return state;
        }
    }
};
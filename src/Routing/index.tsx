import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppHeader from '../Components/UI/Header';
import AppFooter from '../Components/UI/Footer';
import { LoginForm } from '../Containers/Login/LoginForm';


export const AppRoute = {
    Login: '/login',
    Profile: '/profile',
    AccountNotFound: '/error/account-not-found',
    PageNotFound: '/page-not-found'
};

export interface Props { }

export class AppRoutingModule extends React.Component<Props, {}> {

    render() {
        return (
            <div className='container'>
                <AppHeader />
                <div className='container-body'>
                    <Switch>
                        <Route path={AppRoute.Login} exact component={LoginForm} />
                        <Redirect to={AppRoute.Login} />
                    </Switch>
                </div>
                <AppFooter />
            </div>
        );
    }

}

export default AppRoutingModule;
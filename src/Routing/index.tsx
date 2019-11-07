import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppHeader from '../Components/UI/Header';
import AppFooter from '../Components/UI/Footer';
import LoginForm from '../Containers/Login/LoginForm';
import SignUp from '../Containers/SignUp';
import Profile from '../Containers/Profile';
import { AccountNotFound } from '../Components/ErrorPages/AccountNotFound';
import PageNotFound from '../Components/ErrorPages/PageNotFound';


export const AppRoute = {
    Login: '/login',
    Profile: '/profile',
    Register: '/register',
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
                        <Route path={AppRoute.Register} exact component={SignUp} />
                        <Route path={AppRoute.Profile} exact component={Profile} />
                        <Route path={AppRoute.AccountNotFound} exact component={AccountNotFound} />
                        <Route path={AppRoute.PageNotFound} exact component={PageNotFound} />
                        <Redirect to={AppRoute.Login} />
                    </Switch>
                </div>
                <AppFooter />
            </div>
        );
    }

}

export default AppRoutingModule;
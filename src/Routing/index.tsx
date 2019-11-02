import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppHeader from '../Components/UI/Header';
import AppFooter from '../Components/UI/Footer';


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
                        <Route path={AppRoute.Login} exact component={AppHeader} />
                        <Redirect to={AppRoute.Login} />
                    </Switch>
                </div>
                <AppFooter />
            </div>
        );
    }

}

export default AppRoutingModule;
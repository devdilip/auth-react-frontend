import * as React from 'react';
import { WrappingComponent } from '../../Components/HigherOrderComponents/WrappingComponent';
import { HttpStatusGuard } from '../../Services/RouteGuards/HttpStatusGuard';
import { AppRoute } from '../../Routing';
import { UserLoginResponse } from '../../Contracts/Login';
import { AppStorageKeys, AppLocalStorage } from '../../Contracts';
import { getTokenUserName } from '../../Services/ApplicationService';


export interface History {
    push: (pathName: string) => void;
}

export interface Props {
    history: any;
}

class Profile extends React.Component<Props, { }> {
    constructor(props: Props) {
        super(props);
        const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
        if (!token) {
            this.props.history.push(AppRoute.Login);
        }
    }

    render() {
        return (
            <WrappingComponent>
                <p>Welcome,  {getTokenUserName()}</p>
            </WrappingComponent>
        );
    }
}


export default HttpStatusGuard(Profile);

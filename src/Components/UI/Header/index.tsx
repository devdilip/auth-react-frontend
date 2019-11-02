import * as React from 'react';

import appLogo from '../../../Assets/images/logout.png';

import './Header.css';

export interface Props {

}

export interface State {

}

export class AppHeader extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="nav">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <img src={appLogo} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default AppHeader;
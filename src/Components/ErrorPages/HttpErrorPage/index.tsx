import * as React from 'react';

import '../Error.css';

import { WrappingComponent } from '../../HigherOrderComponents/WrappingComponent';
import { redirectionCounter, AppLocalStorage } from '../../../Contracts';
import { AppRoute } from '../../../Routing';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fade = cssTransition({
    enter: 'fadeIn',
    exit: 'fadeOut',
    duration: 400
});



export interface Props {
    httpErrorCode: number | null;
}

export interface State {
    redirectionTimer: number;
}

export class HttpErrorPage extends React.Component<Props, State> {

    error: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            redirectionTimer: 0
        };
        this.error = {
            errorCode: this.props.httpErrorCode,
            shortErrorMessage: 'Something went wrong, please try again later',
            longErrorMessage: 'Something went wrong, please try again later.'
        };
        if (props.httpErrorCode === 401) {
            this.error.shortErrorMessage = '401 - Unauthorized';
            this.error.longErrorMessage = 'You are not authorized to view this page. Please login to continue.';
        } else if (props.httpErrorCode === 500) {
            this.error.shortErrorMessage = '500 - Internal server error';
            this.error.longErrorMessage = 'Something went wrong, please try again later.';
        }
    }

    componentDidMount() {
        const counter = redirectionCounter();
        if (this.props.httpErrorCode === 401) {
            this.setState({
                redirectionTimer: counter
            });
            setInterval(() => {
                toast.error('You will be taken back to login screen in ' + this.state.redirectionTimer);
                this.setState({
                    redirectionTimer: this.state.redirectionTimer - 1
                });
                if (this.state.redirectionTimer === 0) {
                    AppLocalStorage.deleteAll();
                    window.location.assign(AppRoute.Login);
                }
            }, 1000);
        }
    }

    render() {
        return (
            <WrappingComponent>
                <div className="error-container">
                    <div className="error-icon">
                        <div className="error-icon-eyes"></div>
                    </div>
                    <div className="error-note">
                        <p className="title-note">
                            {this.error.shortErrorMessage}
                        </p>
                        <p className="body-note">
                            {this.error.longErrorMessage}
                        </p>
                    </div>
                </div>
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    transition={Fade}
                />
            </WrappingComponent>
        );
    }
}

export default HttpErrorPage;
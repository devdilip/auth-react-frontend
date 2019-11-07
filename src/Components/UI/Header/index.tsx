import * as React from 'react';
import { connect } from 'react-redux';

import { Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { AppLocalStorage, AppStorageKeys } from '../../../Contracts';
import { AppRoute } from '../../../Routing';
import { UserLoginResponse } from '../../../Contracts/Login';
import { LoginActionCreators } from '../../../Actions/Login';
import { Link } from "react-router-dom";


const useStyles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    linkStyle: {
        color: "white"
    }
});

export interface Props {
    classes?: any;
    isLoading: boolean;
    isAuthenticated: boolean;
    showInlineButtonLoader: () => void;
    hideInlineButtonLoader: () => void;
}

export interface State {
    isAuthenticated: boolean;
}

class AppHeader extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isAuthenticated: this.props.isAuthenticated
        };

    }

    componentDidMount = () => {
        const token: UserLoginResponse = AppLocalStorage.get(AppStorageKeys.AppToken, true) as UserLoginResponse;
        if (token) {
            this.setState({
                isAuthenticated: true
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            App
                    </Typography>
                        {this.props.isAuthenticated || this.state.isAuthenticated
                            ? <Button color="inherit" onClick={this.logout}>Logout</Button>
                            : <Button color="inherit">
                                <Link className={classes.linkStyle} to={AppRoute.Login}>
                                    {"Login"}
                                </Link>
                                {/* <Link className={classes.linkStyle} to={AppRoute.Register}>
                                    {"SignUp"}
                                </Link> */}
                            </Button>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    logout = event => {
        this.destroyLocalStorageAndGoToLoginUrl();
    }

    destroyLocalStorageAndGoToLoginUrl = () => {
        AppLocalStorage.deleteAll();
        window.location.href = AppRoute.Login;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading,
        isAuthenticated: state.login.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showInlineButtonLoader: () => dispatch(LoginActionCreators.showInlineButtonLoader()),
        hideInlineButtonLoader: () => dispatch(LoginActionCreators.hideInlineButtonLoader()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AppHeader));
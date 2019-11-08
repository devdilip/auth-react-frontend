import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
// import { __rest } from 'tslib';
import { primaryColor } from "../Styles";

export interface Props {
    classes?: any;
    isLoading?: boolean;
    buttonText?: string;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    buttonType?: string;
    buttonClass?: any;
    buttonColor?: any;
    variant?: any;
    buttonOnClick?: (event: any) => void;
    __rest?;

}

class ProcessButton extends React.Component<Props> {

    render() {
        const { classes, __rest, variant, buttonColor } = this.props;
        return (
            <div className={classes.wrapper}>
                <Button
                    {...__rest}
                    fullWidth
                    variant={variant === undefined ? "contained" : variant}
                    color={buttonColor === undefined ? "primary" : buttonColor}
                    type={this.props.buttonType}
                    className={`${classes.buttonColor} " " ${this.props.buttonClass}`}
                    disabled={this.props.isDisabled || this.props.isLoading}
                    onClick={this.props.buttonOnClick}
                >
                    {this.props.buttonText}
                </Button>
                {this.props.isLoading && (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                )}
            </div>
        );
    }
}
const styles = theme => ({
    wrapper: {
        marginTop: theme.spacing(),
        position: "relative" as any
    },
    buttonColor: {
        color: "#fff"
    },
    buttonSuccess: {
        width: "100%",
        backgroundColor: primaryColor,
        "&:hover": {
            backgroundColor: green[700]
        }
    },
    buttonProgress: {
        color: primaryColor,
        position: "absolute" as any,
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12
    }
});

export default withStyles(styles)(ProcessButton);

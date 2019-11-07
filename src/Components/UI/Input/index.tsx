import * as React from 'react';

import { FormControl, FormHelperText, Input, InputLabel, Theme, withStyles } from "@material-ui/core";
import WrappingComponent from '../../HigherOrderComponents/WrappingComponent';
import { primaryColor } from '../Styles';


export interface Props {
    classes?: any;
    inputId?: string;
    inputType?: string;
    labelText?: string;
    inputPlaceholder?: string;
    formFullWidth?: boolean;
    defaultInputValue?: string;
    inputOnChange?: (event: any) => void;
    inputOnKeyPress?: (event: any) => void;
    isError?: boolean;
    isDisabled?: boolean;
    errorText?: string;
    inputRequired?: boolean;
    startAdornment?: any;
    inputClassName?: any;
    inputOnPaste?: (event: any) => void;
    inputPattern?: any;
    onInput?: (event: any) => void;
    maxLength?: any;

}


class InputFieldImpl extends React.Component<Props, { }> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { inputRequired, formFullWidth } = this.props;
        return (
            <WrappingComponent>
                <FormControl required={inputRequired === undefined ? true : inputRequired} fullWidth={formFullWidth === undefined ? true : formFullWidth}>
                    <InputLabel htmlFor={this.props.inputId}>
                        {this.props.labelText}
                    </InputLabel>
                    <Input
                        disabled={this.props.isDisabled}
                        className={this.props.inputClassName}
                        type={this.props.inputType}
                        placeholder={this.props.inputPlaceholder}
                        id={this.props.inputId}
                        error={this.props.isError}
                        defaultValue={this.props.defaultInputValue}
                        onChange={this.props.inputOnChange}
                        onKeyPress={this.props.inputOnKeyPress}
                        startAdornment={this.props.startAdornment}
                        onPaste={this.props.inputOnPaste}
                        inputProps={{
                            pattern: this.props.inputPattern,
                            onInput: this.props.onInput,
                            maxLength: this.props.maxLength
                        }}
                    >
                    </Input>
                </FormControl>
                <FormHelperText error={this.props.isError}>
                    {this.props.isError ? this.props.errorText : null}
                </FormHelperText>
            </WrappingComponent>
        );
    }
}

const style = (theme: Theme) => ({
    labelRoot: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "1.42857",
        color: primaryColor
    }
});

export const InputField = withStyles(style)(InputFieldImpl);
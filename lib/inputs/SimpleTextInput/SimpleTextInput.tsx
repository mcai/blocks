import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Field} from "react-final-form";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <Field
                name={this.props.name}
                render={({props, state}) => (
                    <div>
                        <label>{this.props.label}</label>
                        <input
                            {...props}
                            type={this.props.password ? "password" : "text"}
                            placeholder={this.props.placeholder}
                        />
                        {state.touched && state.error && <span>{state.error}</span>}
                    </div>
                )}
            >
            </Field>
        );
    }
}

import React, {Component} from "react";
import {SimpleSelectInputProps} from "./SimpleSelectInputProps";
import {Field} from "formik";

export class SimpleSelectInput extends Component<SimpleSelectInputProps, any> {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field as="select" name={this.props.name}>
                    {
                        this.props.options.map(option => (
                            <option value={option.value}>{option.label}</option>
                        ))
                    }
                </Field>
            </div>
        );
    }
}

import React, {Component} from "react";
import {SimpleBooleanInputProps} from "./SimpleBooleanInputProps";
import {Field} from "formik";

export class SimpleBooleanInput extends Component<SimpleBooleanInputProps, any> {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field type="checkbox" name={this.props.name}/>
            </div>
        );
    }
}

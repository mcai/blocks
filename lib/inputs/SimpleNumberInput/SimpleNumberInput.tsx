import React, {Component} from "react";
import {SimpleNumberInputProps} from "./SimpleNumberInputProps";
import {Field} from "formik";

export class SimpleNumberInput extends Component<SimpleNumberInputProps, any> {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field type="number" name={this.props.name}/>
            </div>
        );
    }
}

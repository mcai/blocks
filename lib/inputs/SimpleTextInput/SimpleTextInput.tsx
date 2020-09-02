import React, {Component} from "react";
import {SimpleTextInputProps} from "./SimpleTextInputProps";
import {Field} from "formik";

export class SimpleTextInput extends Component<SimpleTextInputProps, any> {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field type={this.props.password ? "password" : "text"} name={this.props.name} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

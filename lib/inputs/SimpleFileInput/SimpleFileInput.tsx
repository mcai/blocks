import React from "react";
import {Component} from "react";
import {SimpleFileInputProps} from "./SimpleFileInputProps";
import {Field} from "formik";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field type="file" name={this.props.name}/>
            </div>
        );
    }
}

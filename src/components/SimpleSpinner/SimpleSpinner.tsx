import React, {Component} from "react";
import {SyncLoader} from "react-spinners";

export class SimpleSpinner extends Component<any, any> {
    render() {
        return <SyncLoader color={"#0275d8"}/>;
    }
}

import React, {Component} from "react";
import {SimpleKeyValueInputProps} from "./SimpleKeyValueInputProps";
import {SimpleKeyValueInputState} from "./SimpleKeyValueInputState";

export class SimpleKeyValueInput extends Component<SimpleKeyValueInputProps, SimpleKeyValueInputState> {
    constructor(props: SimpleKeyValueInputProps) {
        super(props);

        this.state = {
            key: props.initialKey,
            value: props.initialValue
        }
    }

    render() {
        // TODO
        return undefined;
    }
}

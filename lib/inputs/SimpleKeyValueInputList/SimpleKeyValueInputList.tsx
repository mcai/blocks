import React, {Component} from "react";
import {SimpleKeyValueInputListProps} from "./SimpleKeyValueInputListProps";
import {SimpleKeyValueInputListState} from "./SimpleKeyValueInputListState";
import {SimpleKeyValueInput} from "../SimpleKeyValuePairInput/SimpleKeyValueInput";

export class SimpleKeyValueInputList extends Component<SimpleKeyValueInputListProps, SimpleKeyValueInputListState> {
    constructor(props: SimpleKeyValueInputListProps) {
        super(props);

        this.state = {
            name: props.initialName,
            keyValuePairs: props.initialKeyValuePairs
        }
    }

    render() {
        return (
            this.props.initialKeyValuePairs?.map(x =>
                <SimpleKeyValueInput initialKey={x.key} initialValue={x.value}/>
            )
        );
    }
}

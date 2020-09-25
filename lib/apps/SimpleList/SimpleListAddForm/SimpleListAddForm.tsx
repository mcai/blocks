import React from "react";
import {SimpleListAddFormProps} from "./SimpleListAddFormProps";

export class SimpleListAddForm extends React.Component<SimpleListAddFormProps, {[name: string]: string}> {
    constructor(props: SimpleListAddFormProps) {
        super(props);

        this.state = props.initialItem ?? { value: "" };
    }

    onSubmit(e: any) {
        e.preventDefault();

        if (!this.state) {
            return;
        }

        this.props.onAdd(this.state);

        this.setState({});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                {
                    Object.keys(this.state).map(key =>
                        <input
                            type="text"
                            className="input"
                            placeholder={key}
                            value={this.state[key]}
                            onChange={(e) => this.setState({[key]: e.target.value})}
                        />)
                }

                <button className="button">Add</button>
            </form>
        );
    }
}

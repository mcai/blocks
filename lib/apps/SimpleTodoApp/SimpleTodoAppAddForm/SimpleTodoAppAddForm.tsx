import React from "react";
import {SimpleTodoAppAddFormProps} from "./SimpleTodoAppAddFormProps";
import {SimpleTodoAppAddFormState} from "./SimpleTodoAppAddFormState";

export class SimpleTodoAppAddForm extends React.Component<SimpleTodoAppAddFormProps, SimpleTodoAppAddFormState> {
    constructor(props: SimpleTodoAppAddFormProps) {
        super(props);

        this.state = {
            todo: ""
        };
    }

    onSubmit(e: any) {
        e.preventDefault();
        if (this.state.todo === "") return;
        this.props.onAdd(this.state.todo);
        this.setState({todo: ""});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <input
                    type="text"
                    className="input"
                    placeholder="Enter TODO"
                    value={this.state.todo}
                    onChange={(e) => this.setState({todo: e.target.value})}
                />
                <button className="button">Add</button>
            </form>
        );
    }
}

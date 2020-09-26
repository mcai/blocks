import React from "react";
import {SimpleListAddFormProps} from "./SimpleListAddFormProps";
import {SimpleListAddFormState} from "./SimpleListAddFormState";

export class SimpleListAddForm extends React.Component<SimpleListAddFormProps, SimpleListAddFormState> {
    constructor(props: SimpleListAddFormProps) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    private onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selectedIndex: Number(e.target.value)
        });
    }

    onSubmit(e: any) {
        e.preventDefault();

        this.props.onAdd(this.props.items?.[this.state.selectedIndex] ?? {name: "default", value: ""});
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                {
                    <select
                        value={this.state.selectedIndex}
                        onChange={(e) => this.onChange(e)}
                    >
                        {
                            this.props.items?.map((item, index) => (
                                <option value={index}>{JSON.stringify(item)}</option>
                            ))
                        }
                    </select>
                }

                <button className="button">Add</button>
            </form>
        );
    }
}

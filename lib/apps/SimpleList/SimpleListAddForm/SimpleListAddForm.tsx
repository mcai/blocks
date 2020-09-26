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

        let item = this.props.items?.[this.state.selectedIndex];

        if (item) {
            this.props.onAdd(item);
        }
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
                                <option value={index}>{item.name}</option>
                            ))
                        }
                    </select>
                }

                <button className="button" disabled={this.props.items?.[this.state.selectedIndex] == undefined}>Add</button>
            </form>
        );
    }
}
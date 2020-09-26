import React from "react";
import {SimpleListAddFormProps} from "./SimpleListAddFormProps";
import {SimpleListAddFormState} from "./SimpleListAddFormState";
import {Button} from "react-bootstrap";

export class SimpleListAddForm extends React.Component<SimpleListAddFormProps, SimpleListAddFormState> {
    constructor(props: SimpleListAddFormProps) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    private onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        let selectedIndex = Number(e.target.value);

        this.setState({
            selectedIndex: selectedIndex
        });

        console.log(`SimpleListItem.onChange: selectedIndex=${selectedIndex}`);
    }

    private onSubmit(e: any) {
        e.preventDefault();

        let selectedIndex = this.state.selectedIndex;

        let item = this.props.options?.[selectedIndex];

        if (item) {
            this.props.onAdd({
                name: item.name,
                values: item.getValuesFunc()
            });
        }

        console.log(`SimpleListItem.onSubmit: selectedIndex=${selectedIndex}, item=${item}`);
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <select
                    value={this.state.selectedIndex}
                    onChange={(e) => this.onChange(e)}
                >
                    {
                        this.props.options?.map((item, index) => (
                            <option key={index} value={index}>{item.name}</option>
                        ))
                    }
                </select>

                &nbsp;&nbsp;

                <Button variant="primary" type="submit" disabled={this.props.options?.[this.state.selectedIndex] == undefined}>Add</Button>
            </form>
        );
    }
}

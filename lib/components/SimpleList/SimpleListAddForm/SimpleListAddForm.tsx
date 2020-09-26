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

        let option = this.props.options?.[selectedIndex];

        if (option) {
            this.props.onAdd({
                name: option.name,
                description: option.description,
                values: option.getValuesFunc()
            });
        }

        console.log(`SimpleListItem.onSubmit: selectedIndex=${selectedIndex}, option=${option}`);
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <select
                    value={this.state.selectedIndex}
                    onChange={(e) => this.onChange(e)}
                >
                    {
                        this.props.options?.map((option, index) => (
                            <option key={index} value={index}>{option.description}</option>
                        ))
                    }
                </select>

                &nbsp;&nbsp;

                <Button variant="primary" type="submit" disabled={this.props.options?.[this.state.selectedIndex] == undefined}>添加</Button>
            </form>
        );
    }
}

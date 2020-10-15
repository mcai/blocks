import React from "react";
import { SimpleListAddFormProps } from "./SimpleListAddFormProps";
import { SimpleListAddFormState } from "./SimpleListAddFormState";

export class SimpleListAddForm extends React.Component<SimpleListAddFormProps, SimpleListAddFormState> {
    constructor(props: SimpleListAddFormProps) {
        super(props);

        this.state = {
            selectedIndex: 0,
        };
    }

    private onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = Number(e.target.value);

        this.setState({
            selectedIndex: selectedIndex,
        });

        console.log(`SimpleListItem.onChange: selectedIndex=${selectedIndex}`);
    }

    private onSubmit(e: any) {
        e.preventDefault();

        const selectedIndex = this.state.selectedIndex;

        const option = this.props.options?.[selectedIndex];

        if (option) {
            this.props.onAdd({
                type: option.type,
                ...option.values,
            });
        }

        console.log(`SimpleListItem.onSubmit: selectedIndex=${selectedIndex}, option=${option}`);
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <select value={this.state.selectedIndex} onChange={(e) => this.onChange(e)}>
                    {this.props.options?.map((option, index) => (
                        <option key={index} value={index}>
                            {option.descriptionAsText}
                        </option>
                    ))}
                </select>
                &nbsp;&nbsp;
                <button
                    className="simple-button"
                    type="submit"
                    disabled={this.props.options?.[this.state.selectedIndex] === undefined}
                >
                    添加
                </button>
            </form>
        );
    }
}

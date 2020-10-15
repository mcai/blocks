import React, { Fragment } from "react";
import { SimpleListToolbarProps } from "./SimpleListToolbarProps";
import { SimpleListToolbarState } from "./SimpleListToolbarState";

export class SimpleListToolbar extends React.Component<SimpleListToolbarProps, SimpleListToolbarState> {
    constructor(props: SimpleListToolbarProps) {
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

        console.log(`SimpleListToolbar.onChange: selectedIndex=${selectedIndex}`);
    }

    private add() {
        const selectedIndex = this.state.selectedIndex;

        const option = this.props.options?.[selectedIndex];

        if (option) {
            this.props.onAdd({
                id: option.id,
                ...option.values,
            });
        }

        console.log(`SimpleListToolbar.onSubmit: selectedIndex=${selectedIndex}, option=${option}`);
    }

    render() {
        return (
            <Fragment>
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
                    onClick={() => this.add()}
                    disabled={this.props.options?.[this.state.selectedIndex] === undefined}
                >
                    添加
                </button>
            </Fragment>
        );
    }
}

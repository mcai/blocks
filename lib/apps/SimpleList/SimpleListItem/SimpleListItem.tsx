import React from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {Button} from "react-bootstrap";
import {BsTrash} from "react-icons/all";

export class SimpleListItem extends React.Component<SimpleListItemProps, { [name: string]: string }> {
    constructor(props: SimpleListItemProps) {
        super(props);

        this.state = props.initialItem ?? { value: "" };
    }

    onUpdate(key: string, value: string) {
        this.setState({
            [key]: value
        });

        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <div className='list-item'>
                {
                    Object.keys(this.state).map(key =>
                        <input
                            key={key}
                            type="text"
                            className="input"
                            placeholder={key}
                            value={this.state[key]}
                            onChange={(e) => this.onUpdate(key, e.target.value)}
                        />)
                }

                <Button variant={"danger"} className="is-pulled-right" onClick={() => this.props.onRemove(this.props.index)}>
                    <BsTrash/>
                </Button>
            </div>
        );
    }
}

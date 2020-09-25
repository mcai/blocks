import React from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {Button} from "react-bootstrap";
import {BsTrash} from "react-icons/all";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: string) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <div className='list-item'>
                {
                    Object.keys(this.props.item).map(key =>
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

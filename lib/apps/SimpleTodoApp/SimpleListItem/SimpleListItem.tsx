import React from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {Button} from "react-bootstrap";
import {BsTrash} from "react-icons/all";

export class SimpleListItem extends React.Component<SimpleListItemProps> {
    render() {
        return (
            <div className='list-item'>
                {this.props.item}
                <Button variant={"danger"} className="is-pulled-right" onClick={() => this.props.onRemove(this.props.index)}>
                    <BsTrash/>
                </Button>
            </div>
        );
    }
}

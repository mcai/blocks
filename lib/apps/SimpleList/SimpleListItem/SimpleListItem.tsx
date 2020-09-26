import React, { Fragment } from "react";
import {SimpleListItemProps} from "./SimpleListItemProps";
import {Button, Col, Row} from "react-bootstrap";
import {BsTrash} from "react-icons/all";

export class SimpleListItem extends React.Component<SimpleListItemProps, any> {
    onUpdate(key: string, value: string) {
        this.props.onUpdate(this.props.index, key, value);

        console.log(`SimpleListItem.onUpdate: index=${this.props.index}, key=${key}, value=${value}`);
    }

    render() {
        return (
            <Row>
                <Col>
                    <b>{this.props.item.name}: </b>

                    {
                        Object.keys(this.props.item.values).map(key =>
                            <Fragment>
                                <span>{key}: </span>

                                <input
                                    key={key}
                                    type="text"
                                    placeholder={key}
                                    value={this.props.item.values[key]}
                                    onChange={(e) => this.onUpdate(key, e.target.value)}
                                />

                                &nbsp;&nbsp;
                            </Fragment>
                        )
                    }

                    <Button variant={"danger"} className="is-pulled-right" onClick={() => this.props.onRemove(this.props.index)}>
                        <BsTrash/>
                    </Button>
                </Col>
            </Row>
        );
    }
}

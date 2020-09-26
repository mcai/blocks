import React from "react";
import {SimpleListHeaderProps} from "./SimpleListHeaderProps";
import {Col, Row} from "react-bootstrap";

export class SimpleListHeader extends React.Component<SimpleListHeaderProps, any> {
    render() {
        return (
            <Row>
                <Col>
                    共 {this.props.items?.length ?? 0} 项

                    {
                        this.props.items?.map((item, index) => (
                            <span key={index}>{JSON.stringify(item)}</span>
                        ))
                    }
                </Col>
            </Row>
        )
    }
}

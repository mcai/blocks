import React, { Fragment } from "react";
import {SimpleListAddForm} from "./SimpleListAddForm/SimpleListAddForm";

import {SimpleListProps} from "./SimpleListProps";
import {SimpleListState} from "./SimpleListState";
import {SimpleListItemType} from "./SimpleListItemType";
import {SimpleListItem} from "./SimpleListItem/SimpleListItem";
import {Col, Row} from "react-bootstrap";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    constructor(props: SimpleListProps) {
        super(props);

        this.state = {
            items: this.props.initialItems
        };
    }

    getItems(): SimpleListItemType[] | undefined {
        return this.state.items;
    }

    private onAdd(item: SimpleListItemType) {
        this.setState({
            items: [...(this.state.items ?? []), item]
        });

        console.log(`SimpleList.onAdd: item=${JSON.stringify(item)}`);
    }

    private onUpdate(index: number, key: string, value: string) {
        let newItems = [...(this.state.items ?? [])];
        newItems[index].values[key] = value;
        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onUpdate: index=${index}, key=${key}, value=${value}`);
    }

    private onRemove(index: number) {
        let newItems = [...(this.state.items ?? [])];
        newItems.splice(index, 1);

        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onRemove: index=${index}`);
    }

    render() {
        return(
            <Fragment>
                <Row>
                    <Col>
                        <p>
                            共 {this.state.items?.length ?? 0} 项
                        </p>

                        <br/>

                        {
                            this.state.items?.map((item, index) => (
                                <p key={index}>{JSON.stringify(item)}</p>
                            ))
                        }
                    </Col>
                </Row>

                {
                    this.state.items?.map((item: any, index: number) => (
                        <SimpleListItem
                            key={index}
                            item={item}
                            index={index}
                            onUpdate={(index1, key, value) => this.onUpdate(index1, key, value)}
                            onRemove={(index1 => this.onRemove(index1))}
                        />
                    ))
                }

                <SimpleListAddForm
                    options={this.props.addFormOptions}
                    onAdd={(item: SimpleListItemType) => this.onAdd(item)}
                />
            </Fragment>
        );
    }
}
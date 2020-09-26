import React, { Fragment } from "react";
import {SimpleListAddForm} from "./SimpleListAddForm/SimpleListAddForm";
import {SimpleListHeader} from "./SimpleListHeader/SimpleListHeader";

import {SimpleListProps} from "./SimpleListProps";
import {SimpleListState} from "./SimpleListState";
import {SimpleListItemType} from "./SimpleListItemType";
import {SimpleListItem} from "./SimpleListItem/SimpleListItem";

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

    onAdd(item: SimpleListItemType) {
        this.setState({
            items: [...(this.state.items ?? []), item]
        });
    }

    onUpdate(index: number, key: string, value: string) {
        let newItems = [...(this.state.items ?? [])];
        newItems[index].values[key] = value;
        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onUpdate: index=${index}, key=${key}, value=${value}`);
    }

    onRemove(index: number) {
        let newItems = [...(this.state.items ?? [])];
        newItems.splice(index, 1);
        this.setState({
            items: newItems
        });
    }

    render() {
        return(
            <Fragment>
                <SimpleListHeader
                    items={this.state.items}
                />

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
                    items={this.props.addFormItems}
                    onAdd={(item: SimpleListItemType) => this.onAdd(item)}
                />
            </Fragment>
        );
    }
}

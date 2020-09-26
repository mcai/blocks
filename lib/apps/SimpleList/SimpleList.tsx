import React from "react";
import {SimpleListAddForm} from "./SimpleListAddForm/SimpleListAddForm";
import {SimpleListHeader} from "./SimpleListHeader/SimpleListHeader";
import {SimpleListList} from "./SimpleListList/SimpleListList";

import "./SimpleList.css";
import {SimpleListProps} from "./SimpleListProps";
import {SimpleListState} from "./SimpleListState";
import {SimpleListItemType} from "./SimpleListItemType";

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
        newItems[index][key] = value;
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
            <div className='wrapper'>
                <div className='card frame'>
                    <SimpleListHeader
                        items={this.state.items}
                    />

                    <SimpleListList
                        items={this.state.items}
                        onUpdate={((index: number, key: string, value: string) => this.onUpdate(index, key, value))}
                        onRemove={(index: number) => this.onRemove(index)}
                    />

                    <SimpleListAddForm
                        items={this.props.addFormItems}
                        onAdd={(item: SimpleListItemType) => this.onAdd(item)}
                    />
                </div>
            </div>
        );
    }
}

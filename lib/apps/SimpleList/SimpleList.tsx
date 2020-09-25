import React from "react";
import {SimpleListAddForm} from "./SimpleListAddForm/SimpleListAddForm";
import {SimpleListHeader} from "./SimpleListHeader/SimpleListHeader";
import {SimpleListList} from "./SimpleListList/SimpleListList";

import "./SimpleList.css";
import {SimpleListProps} from "./SimpleListProps";
import {SimpleListState} from "./SimpleListState";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    constructor(props: SimpleListProps) {
        super(props);

        this.state = {
            items: this.props.initialItems
        };
    }

    getItems(): { [name: string]: string }[] | undefined {
        return this.state.items;
    }

    onAdd(item: {[name: string]: string}) {
        this.setState({
            items: [...(this.state.items ?? []), item]
        });
    }

    onUpdate(index: number, item: {[name: string]: string}) {
        let newItems = [...(this.state.items ?? [])];
        newItems[index] = item;
        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onUpdate: index=${index}, item=${JSON.stringify(item)}`);
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
                        onUpdate={((index: number, item: { [name: string]: string }) => this.onUpdate(index, item))}
                        onRemove={(index: number) => this.onRemove(index)}
                    />

                    <SimpleListAddForm
                        initialItem={this.props.addFormInitialItem}
                        onAdd={(item: {[name: string]: string}) => this.onAdd(item)}
                    />
                </div>
            </div>
        );
    }
}

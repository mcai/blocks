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

    onAdd(item: {[name: string]: string}) {
        this.setState({
            items: [...(this.state.items ?? []), item]
        });
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
                    <SimpleListHeader numItems={this.state.items?.length ?? 0} />
                    <SimpleListList items={this.state.items} onRender={this.props.onRender} onRemove={(index: number) => this.onRemove(index)} />
                    <SimpleListAddForm onAdd={(item: {[name: string]: string}) => this.onAdd(item)} />
                </div>
            </div>
        );
    }
}

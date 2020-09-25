import React from "react";
import {SimpleListItem} from "../SimpleListItem/SimpleListItem";
import {SimpleListListProps} from "./SimpleListListProps";

export class SimpleListList extends React.Component<SimpleListListProps, any> {
    render() {
        return (
            <div className='list-wrapper'>
                {
                    this.props.items?.map((item: any, index: number) => (
                        <SimpleListItem
                            key={index}
                            item={item}
                            index={index}
                            onUpdate={(index1, key, value) => this.props.onUpdate(index1, key, value)}
                            onRemove={(index1 => this.props.onRemove(index1))}
                        />
                    ))
                }
            </div>
        );
    }
}

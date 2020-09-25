import React from "react";
import {SimpleListItem} from "../SimpleListItem/SimpleListItem";
import {SimpleListListProps} from "./SimpleListListProps";

export class SimpleListList extends React.Component<SimpleListListProps, any> {
    render() {
        return (
            <div className='list-wrapper'>
                {
                    this.props.items?.map((item: any, index: number) => (
                        <SimpleListItem key={index} item={item} index={index} onRemove={this.props.onRemove}/>
                    ))
                }
            </div>
        );
    }
}

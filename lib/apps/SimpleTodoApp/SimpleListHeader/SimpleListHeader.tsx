import React from "react";
import {SimpleListHeaderProps} from "./SimpleListHeaderProps";

export class SimpleListHeader extends React.Component<SimpleListHeaderProps, any> {
    render() {
        return (
            <div className='card-header'>
                <h1 className='card-header-title header'>
                    共 {this.props.numItems} 项
                </h1>
            </div>
        )
    }
}

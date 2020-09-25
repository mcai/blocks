import React from "react";
import {SimpleListHeaderProps} from "./SimpleListHeaderProps";

export class SimpleListHeader extends React.Component<SimpleListHeaderProps, any> {
    render() {
        return (
            <div className='card-header'>
                <h1 className='card-header-title header'>
                    共 {this.props.items?.length ?? 0} 项

                    {
                        this.props.items?.map(item => (
                            <span>{JSON.stringify(item)}</span>
                        ))
                    }
                </h1>
            </div>
        )
    }
}

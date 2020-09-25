import React from "react";
import {SimpleTodoAppHeaderProps} from "./SimpleTodoAppHeaderProps";

export class SimpleTodoAppHeader extends React.Component<SimpleTodoAppHeaderProps, any> {
    render() {
        return (
            <div className='card-header'>
                <h1 className='card-header-title header'>
                    You have {this.props.numTodos} Todos
                </h1>
            </div>
        )
    }
}

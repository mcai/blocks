import React from "react";
import {SimpleTodoAppTodoProps} from "./SimpleTodoAppTodoProps";

export class SimpleTodoAppTodo extends React.Component<SimpleTodoAppTodoProps> {
    render() {
        return (
            <div className='list-item'>
                {this.props.todo}
                <button className="delete is-pulled-right" onClick={() => this.props.onRemove(this.props.index)}/>
            </div>
        );
    }
}

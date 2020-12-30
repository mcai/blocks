import React from "react";
import { SimpleListToolbar } from "./SimpleListToolbar/SimpleListToolbar";

import { SimpleListProps } from "./SimpleListProps";
import { SimpleListState } from "./SimpleListState";
import { SimpleListItem } from "./SimpleListItem/SimpleListItem";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    private onAdd(row: { id: string; [name: string]: any }) {
        console.log(`SimpleList.onAdd: row.id=${row.id}`);

        const newRows = [...(this.props.rows ?? []), row];

        this.props.onUpdate(newRows);
    }

    private onUpdate(index: number, name: string, value: string) {
        const newRows = [...(this.props.rows ?? [])];
        newRows[index][name] = value;

        console.log(`SimpleList.onUpdate: index=${index}, name=${name}, value=${value}`);

        this.props.onUpdate(newRows);
    }

    private onRemove(index: number) {
        const newRows = [...(this.props.rows ?? [])];
        newRows.splice(index, 1);

        console.log(`SimpleList.onRemove: index=${index}`);

        this.props.onUpdate(newRows);
    }

    render() {
        const toolbar = (
            <div className="simple-section">
                <div className="simple-left">
                    <p>共 {this.props.rows?.length ?? 0} 项</p>
                </div>
                <div className="simple-right">
                    {(this.props.readOnly === undefined || !this.props.readOnly) && (
                        <SimpleListToolbar options={this.props.options} onAdd={(row) => this.onAdd(row)} />
                    )}
                </div>
                <div className="simple-center">&nbsp;&nbsp;</div>
            </div>
        );

        return (
            <div>
                {this.props.rows?.map((row, index) => {
                    const { id, ...values } = row;
                    const option = this.props.options?.filter((x) => x.id == row.id)?.[0];

                    return (
                        <div key={index}>
                            <SimpleListItem
                                id={id}
                                description={option?.description}
                                inputFunc={option?.inputFunc}
                                values={values ?? {}}
                                index={index}
                                onUpdate={(index1, name, value) => this.onUpdate(index1, name, value)}
                                onRemove={(index1) => this.onRemove(index1)}
                                readOnly={this.props.readOnly}
                            />
                        </div>
                    );
                })}

                {toolbar}
            </div>
        );
    }
}

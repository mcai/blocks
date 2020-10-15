import React from "react";
import { SimpleListAddForm } from "./SimpleListAddForm/SimpleListAddForm";

import { SimpleListProps } from "./SimpleListProps";
import { SimpleListState } from "./SimpleListState";
import { SimpleListItem } from "./SimpleListItem/SimpleListItem";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    private onAdd(row: { type: string; [name: string]: any }) {
        console.log(`SimpleList.onAdd: row.type=${row.type}`);

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
        return (
            <div>
                <div className="simple-section">
                    <div className="simple-left">
                        <p>共 {this.props.rows?.length ?? 0} 项</p>
                    </div>
                    <div className="simple-right">
                        {(this.props.readonly === undefined || !this.props.readonly) && (
                            <SimpleListAddForm
                                options={this.props.addFormOptions}
                                onAdd={(row: { type: string; [name: string]: any }) => this.onAdd(row)}
                            />
                        )}
                    </div>
                    <div className="simple-center">&nbsp;&nbsp;</div>
                </div>

                {this.props.rows?.map((row: any, index: number) => {
                    const option = this.props.addFormOptions?.filter((x) => x.type == row.type)?.[0];

                    return (
                        <div key={index}>
                            <SimpleListItem
                                type={row.type}
                                description={option?.description}
                                inputs={option?.inputs ?? {}}
                                values={option?.values ?? {}}
                                index={index}
                                onUpdate={(index1, name, value) => this.onUpdate(index1, name, value)}
                                onRemove={(index1) => this.onRemove(index1)}
                                readonly={this.props.readonly}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

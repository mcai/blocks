import React from "react";
import { SimpleListToolbar } from "./SimpleListToolbar/SimpleListToolbar";

import { SimpleListProps } from "./SimpleListProps";
import { SimpleListState } from "./SimpleListState";
import { SimpleListItem } from "./SimpleListItem/SimpleListItem";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    private onAdd(row: { id: string; [name: string]: any }) {
        console.debug(`SimpleList.onAdd: row.id=${row.id}`);

        const newRows = [...(this.props.rows ?? []), row];

        this.props.onUpdate(newRows);
    }

    private onUpdate(index: number, name: string, value: string) {
        const newRows = [...(this.props.rows ?? [])];
        newRows[index][name] = value;

        console.debug(`SimpleList.onUpdate: index=${index}, name=${name}, value=${value}`);

        this.props.onUpdate(newRows);
    }

    private onRemove(index: number) {
        const newRows = [...(this.props.rows ?? [])];
        newRows.splice(index, 1);

        console.debug(`SimpleList.onRemove: index=${index}`);

        this.props.onUpdate(newRows);
    }

    render() {
        const toolbar = (
            <div className="row mb-2">
                <div className="col-auto">共 {this.props.rows?.length ?? 0} 项</div>
                <div className="col-auto ml-auto">
                    {(this.props.readOnly === undefined || !this.props.readOnly) && (
                        <SimpleListToolbar
                            options={this.state.options}
                            onAdd={(row) => this.onAdd(row)}
                            onChange={async (text) => {
                                const options = await this.props.getOptions?.(text);

                                this.setState({
                                    options: options,
                                });
                            }}
                        />
                    )}
                </div>
            </div>
        );

        return (
            <div>
                {this.props.rows?.map((row, index) => {
                    const { id, ...values } = row;
                    const option = this.state.options?.filter((x) => x.id == row.id)?.[0];

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

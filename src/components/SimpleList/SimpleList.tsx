import React from "react";
import { SimpleListAddForm } from "./SimpleListAddForm/SimpleListAddForm";

import { SimpleListProps } from "./SimpleListProps";
import { SimpleListState } from "./SimpleListState";
import { SimpleListItemType } from "./SimpleListItemType";
import { SimpleListItem } from "./SimpleListItem/SimpleListItem";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    private onAdd(item: SimpleListItemType) {
        console.log(`SimpleList.onAdd: item.name=${item.name}`);

        const newItems = [...(this.props.items ?? []), item];

        this.props.onUpdate(newItems);
    }

    private onUpdate(index: number, name: string, value: string) {
        const newItems = [...(this.props.items ?? [])];
        newItems[index].fields[name].value = value;

        console.log(`SimpleList.onUpdate: index=${index}, name=${name}, value=${value}`);

        this.props.onUpdate(newItems);
    }

    private onRemove(index: number) {
        const newItems = [...(this.props.items ?? [])];
        newItems.splice(index, 1);

        console.log(`SimpleList.onRemove: index=${index}`);

        this.props.onUpdate(newItems);
    }

    render() {
        return (
            <div>
                <div className="simple-section">
                    <div className="simple-left">
                        <p>共 {this.props.items?.length ?? 0} 项</p>
                    </div>
                    <div className="simple-right">
                        {(this.props.readonly === undefined || !this.props.readonly) && (
                            <SimpleListAddForm
                                options={this.props.addFormOptions}
                                onAdd={(item: SimpleListItemType) => this.onAdd(item)}
                            />
                        )}
                    </div>
                    <div className="simple-center">&nbsp;&nbsp;</div>
                </div>

                <div className="simple-section">
                    {this.props.items?.map((item: any, index: number) => (
                        <div key={index}>
                            <SimpleListItem
                                item={item}
                                index={index}
                                onUpdate={(index1, name, value) => this.onUpdate(index1, name, value)}
                                onRemove={(index1) => this.onRemove(index1)}
                                readonly={this.props.readonly}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

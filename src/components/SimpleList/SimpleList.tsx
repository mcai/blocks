import React from "react";
import {SimpleListAddForm} from "./SimpleListAddForm/SimpleListAddForm";

import {SimpleListProps} from "./SimpleListProps";
import {SimpleListState} from "./SimpleListState";
import {SimpleListItemType} from "./SimpleListItemType";
import {SimpleListItem} from "./SimpleListItem/SimpleListItem";

export class SimpleList extends React.Component<SimpleListProps, SimpleListState> {
    constructor(props: SimpleListProps) {
        super(props);

        this.state = {
            items: this.props.initialItems
        };
    }

    componentDidMount() {
        this.props.onUpdate?.(this.state.items);
    }

    componentDidUpdate(
        prevProps: Readonly<SimpleListProps>,
        prevState: Readonly<SimpleListState>,
        snapshot?: any
    ) {
        if (prevProps.initialItems != this.props.initialItems) {
            this.setState({
                items: this.props.initialItems
            });
        }
    }

    private onAdd(item: SimpleListItemType) {
        const newItems = [...(this.state.items ?? []), item];

        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onAdd: item.name=${item.name}`);

        this.props.onUpdate?.(newItems);
    }

    private onUpdate(index: number, key: string, value: string) {
        const newItems = [...(this.state.items ?? [])];
        newItems[index].fields[key].value = value;

        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onUpdate: index=${index}, key=${key}, value=${value}`);

        this.props.onUpdate?.(newItems);
    }

    private onRemove(index: number) {
        const newItems = [...(this.state.items ?? [])];
        newItems.splice(index, 1);

        this.setState({
            items: newItems
        });

        console.log(`SimpleList.onRemove: index=${index}`);

        this.props.onUpdate?.(newItems);
    }

    render() {
        return(
            <div>
                <div className="simple-section">
                    <div className="simple-left">
                        <p>
                            共 {this.state.items?.length ?? 0} 项
                        </p>
                    </div>
                    <div className="simple-right">
                        {
                            (this.props.readonly === undefined || !this.props.readonly) && <SimpleListAddForm
                                options={this.props.addFormOptions}
                                onAdd={(item: SimpleListItemType) => this.onAdd(item)}
                            />
                        }
                    </div>
                    <div className="simple-center">
                        &nbsp;&nbsp;
                    </div>
                </div>

                <div className="simple-section">
                    {
                        this.state.items?.map((item: any, index: number) => (
                            <div>
                                <SimpleListItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    onUpdate={(index1, key, value) => this.onUpdate(index1, key, value)}
                                    onRemove={(index1 => this.onRemove(index1))}
                                    readonly={this.props.readonly}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

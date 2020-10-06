import React, {Fragment} from "react";
import {SimpleField} from "./SimpleField";
import {SimpleActionsFieldType} from "./SimpleActionsFieldType";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {SimpleModalConfirm} from "../components/SimpleModalConfirm/SimpleModalConfirm";
import Enumerable from "linq";
import {SimpleModalConfirmType} from "../components/SimpleModalConfirm/SimpleModalConfirmType";

export class SimpleActionsField implements SimpleField {
    title?: React.ReactNode;

    actions?: {
        text?: React.ReactNode,
        hrefFunc?: (item: any) => string,
        onClick?: (item: any) => void,
        type?: SimpleActionsFieldType,
        visible?: boolean
    }[];

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        actions?: {
            text?: React.ReactNode,
            hrefFunc?: (item: any) => string,
            onClick?: (item: any) => void,
            type?: SimpleActionsFieldType,
            visible?: boolean
        }[],
        visible?: boolean
    ) {
        this.title = title;
        this.actions = actions;
        this.visible = visible;

        if (Enumerable
            .from(this.actions ?? [])
            .any(action =>
                action.type !== undefined
                && action.type != SimpleActionsFieldType.none
                && action.hrefFunc !== undefined
            )
        ) {
            throw new Error("The combination of action.type != none and action.hrefFunc !== undefined is not supported.");
        }
    }

    render(item: any): React.ReactNode {
        return (
            <Fragment>
                <DropdownButton title={this.title}>
                    {
                        this.actions?.filter(action => action.visible == undefined || action.visible)
                            .map(action => {
                                let modalConfirmType = SimpleModalConfirmType.primary;

                                if (action.type !== undefined) {
                                    switch (action.type) {
                                        case SimpleActionsFieldType.none:
                                            break;
                                        case SimpleActionsFieldType.danger:
                                            modalConfirmType = SimpleModalConfirmType.danger;
                                            break;
                                        case SimpleActionsFieldType.warning:
                                            modalConfirmType = SimpleModalConfirmType.warning;
                                            break;
                                    }
                                }

                                return action.type == undefined || action.type == SimpleActionsFieldType.none
                                    ? <Dropdown.Item
                                        href={action.hrefFunc?.(item)}
                                        onClick={() => action.onClick?.(item)}
                                        className={"mr-3"}
                                    >
                                        {action.text}
                                    </Dropdown.Item>
                                    : <SimpleModalConfirm
                                        title={`确定${action.text}`}
                                        subtitle={`${action.text}后不可撤销.`}
                                        onConfirm={() => action.onClick?.(item)}
                                        type={modalConfirmType}
                                        onCancel={() => {
                                        }}
                                        okText="确定"
                                        cancelText="取消"
                                    >
                                        <Dropdown.Item
                                            className={"mr-3"}
                                        >
                                            {action.text}
                                        </Dropdown.Item>
                                    </SimpleModalConfirm>;
                            })
                    }
                </DropdownButton>
            </Fragment>
        );
    }
}

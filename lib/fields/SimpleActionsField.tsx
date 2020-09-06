import React, {Fragment} from "react";
import {SimpleField} from "./SimpleField";
import {SimpleActionsFieldType} from "./SimpleActionsFieldType";
import {Button} from "react-bootstrap";
import {SimpleModalConfirm} from "../components/SimpleModalConfirm/SimpleModalConfirm";
import Enumerable from "linq";

export class SimpleActionsField implements SimpleField {
    readonly title: React.ReactNode;

    actions: {
        text?: React.ReactNode,
        hrefFunc?: (item: any) => string,
        onClick?: (item: any) => void,
        type?: SimpleActionsFieldType
    }[]

    constructor(
        title: React.ReactNode,
        actions: {
            text?: React.ReactNode,
            hrefFunc?: (item: any) => string,
            onClick?: (item: any) => void,
            type?: SimpleActionsFieldType
        }[]
    ) {
        this.title = title;
        this.actions = actions;

        if (Enumerable
            .from(this.actions)
            .any(action =>
                action.type != undefined
                && action.type != SimpleActionsFieldType.none
                && action.hrefFunc != undefined
            )
        ) {
            throw new Error("The combination of action.type != none and action.hrefFunc != undefined is not supported.");
        }
    }

    render(item: any): React.ReactNode {
        return (
            <Fragment>
                {
                    this.actions.map(action => {
                        let buttonClass = "primary";

                        if (action.type != undefined) {
                            switch (action.type) {
                                case SimpleActionsFieldType.none:
                                    break;
                                case SimpleActionsFieldType.danger:
                                    buttonClass = "danger";
                                    break;
                                case SimpleActionsFieldType.warning:
                                    buttonClass = "warning";
                                    break;
                            }
                        }

                        return action.type == undefined || action.type == SimpleActionsFieldType.none
                            ? <Button
                                variant={buttonClass}
                                href={action.hrefFunc?.(item)}
                                onClick={() => action.onClick?.(item)}
                                className={"mr-3"}
                            >
                                {action.text}
                            </Button>
                            : <SimpleModalConfirm
                                title={`确定${action.text}`}
                                subtitle={`${action.text}后不可撤销.`}
                                onConfirm={() => action.onClick?.(item)}
                                onCancel={() => {}}
                                okText="确定"
                                cancelText="取消"
                            >
                                <Button
                                    variant={buttonClass}
                                    className={"mr-3"}
                                >
                                    {action.text}
                                </Button>
                            </SimpleModalConfirm>;
                    })
                }
            </Fragment>
        );
    }
}

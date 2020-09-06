import React, {Fragment} from "react";
import {SimpleField} from "./SimpleField";
import {Button} from "react-bootstrap";
import {SimpleActionsFieldType} from "./SimpleActionsFieldType";

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

                        return (
                            <Button variant={buttonClass} href={action.hrefFunc?.(item)} onClick={() => action.onClick?.(item)} className={"mr-3"}>
                                {action.text}
                            </Button>
                        );
                    })
                }
            </Fragment>
        );
    }
}

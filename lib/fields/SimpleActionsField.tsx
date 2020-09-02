import React, { Fragment } from "react";
import {SimpleField} from "./SimpleField";
import {Button} from "react-bootstrap";

export class SimpleActionsField implements SimpleField {
    title: React.ReactNode;

    actions: {
        text: React.ReactNode,
        urlFunc: (item: any) => string
    }[]

    constructor(
        title: React.ReactNode,
        actions: {
            text: React.ReactNode,
            urlFunc: (item: any) => string
        }[]
    ) {
        this.title = title;
        this.actions = actions;
    }

    render(item: any): React.ReactNode {
        return (
            <Fragment>
                {
                    this.actions.map(action => (
                        <Button variant={"primary"} href={action.urlFunc(item)}>
                            {action.text}
                        </Button>
                    ))
                }
            </Fragment>
        );
    }

    renderAsText(item: any): string | undefined {
        return undefined;
    }
}

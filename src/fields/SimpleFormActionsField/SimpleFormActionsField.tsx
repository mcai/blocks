import React, { Component, Fragment } from "react";
import { SimpleFormActionsFieldProps } from "./SimpleFormActionsFieldProps";
import Enumerable from "linq";
import { SimpleFormActionsFieldType } from "./SimpleFormActionsFieldType";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { SimpleModalConfirmType } from "../../components/SimpleModalConfirm/SimpleModalConfirmType";
import { SimpleModalConfirm } from "../../components/SimpleModalConfirm/SimpleModalConfirm";

export class SimpleFormActionsField extends Component<SimpleFormActionsFieldProps, any> {
    render() {
        if (
            Enumerable.from(this.props.actions ?? []).any(
                (action) =>
                    action.type !== undefined &&
                    action.type != SimpleFormActionsFieldType.none &&
                    action.hrefFunc !== undefined,
            )
        ) {
            throw new Error(
                "The combination of action.type != none and action.hrefFunc !== undefined is not supported.",
            );
        }

        return (
            <Fragment>
                <DropdownButton title={this.props.title}>
                    {this.props.actions
                        ?.filter((action) => {
                            let visible = action.visible;

                            if (typeof visible === "function") {
                                visible = visible(this.props.values);
                            }

                            return visible == undefined || visible;
                        })
                        .map((action) => {
                            let modalConfirmType = SimpleModalConfirmType.primary;

                            if (action.type !== undefined) {
                                switch (action.type) {
                                    case SimpleFormActionsFieldType.none:
                                        break;
                                    case SimpleFormActionsFieldType.danger:
                                        modalConfirmType = SimpleModalConfirmType.danger;
                                        break;
                                    case SimpleFormActionsFieldType.warning:
                                        modalConfirmType = SimpleModalConfirmType.warning;
                                        break;
                                }
                            }

                            return action.type == undefined || action.type == SimpleFormActionsFieldType.none ? (
                                <Dropdown.Item
                                    href={action.hrefFunc?.(this.props.values)}
                                    onClick={() => action.onClick?.(this.props.values)}
                                    className={"mr-3"}
                                >
                                    {action.text}
                                </Dropdown.Item>
                            ) : (
                                <SimpleModalConfirm
                                    title={`确定${action.text}`}
                                    subtitle={`${action.text}后不可撤销.`}
                                    onConfirm={() => action.onClick?.(this.props.values)}
                                    type={modalConfirmType}
                                    onCancel={() => {}}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                    <Dropdown.Item className={"mr-3"}>{action.text}</Dropdown.Item>
                                </SimpleModalConfirm>
                            );
                        })}
                </DropdownButton>
            </Fragment>
        );
    }
}

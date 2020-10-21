import React, { Component, Fragment } from "react";
import { SimpleActionsFieldProps } from "./SimpleActionsFieldProps";
import { SimpleActionsFieldType } from "./SimpleActionsFieldType";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { SimpleModalConfirmType } from "../../components/SimpleModalConfirm/SimpleModalConfirmType";
import { SimpleModalConfirm } from "../../components/SimpleModalConfirm/SimpleModalConfirm";

export class SimpleActionsField extends Component<SimpleActionsFieldProps, any> {
    render() {
        if (
            this.props.actions?.some(
                (action) =>
                    action.type !== undefined &&
                    action.type != SimpleActionsFieldType.none &&
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

                            return action.type == undefined || action.type == SimpleActionsFieldType.none ? (
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

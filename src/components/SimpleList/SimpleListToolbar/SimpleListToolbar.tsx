import React, { Fragment } from "react";
import { SimpleListToolbarProps } from "./SimpleListToolbarProps";
import { SimpleListToolbarState } from "./SimpleListToolbarState";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactSearchBox from "react-search-box";

export class SimpleListToolbar extends React.Component<SimpleListToolbarProps, SimpleListToolbarState> {
    constructor(props: SimpleListToolbarProps) {
        super(props);

        this.state = {
            selectedOption: undefined,
        };
    }

    private add() {
        const option = this.state.selectedOption;

        if (option) {
            this.props.onAdd({
                id: option.id,
                ...option.values,
            });
        }

        console.debug(`SimpleListToolbar.onSubmit: option=${option}`);
    }

    render() {
        return (
            <Fragment>
                <div className="p-2">
                    <ReactSearchBox
                        placeholder="请输入关键词"
                        data={this.props.options?.map((option) => ({
                            key: option.id,
                            value: option.descriptionAsText,
                        }))}
                        onSelect={(record: any) => {
                            this.setState({
                                selectedOption: this.props.options?.filter((o) => o.id === record.key)?.[0],
                            });
                        }}
                        onChange={async (text: any) => {
                            await this.props.onChange?.(text);
                        }}
                        fuseConfigs={{
                            threshold: 0.05,
                        }}
                        value=""
                    />
                </div>
                <button
                    className="btn btn-primary p-2"
                    type="button"
                    onClick={() => this.add()}
                    disabled={this.state.selectedOption === undefined}
                >
                    添加
                </button>
            </Fragment>
        );
    }
}

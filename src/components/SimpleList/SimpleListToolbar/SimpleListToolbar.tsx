import React, { Fragment } from "react";
import { SimpleListToolbarProps } from "./SimpleListToolbarProps";
import { SimpleListToolbarState } from "./SimpleListToolbarState";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactSearchAutocomplete } from "react-search-autocomplete";

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
                <div className="tw-z-50" style={{ width: 800 }}>
                    <ReactSearchAutocomplete
                        fuseOptions={{
                            threshold: 0.6,
                            ignoreLocation: true,
                        }}
                        items={this.props.options?.map((option) => ({
                            id: option.id,
                            name: option.descriptionAsText,
                        }))}
                        onSearch={async (text: any) => {
                            await this.props.onChange?.(text);
                        }}
                        onSelect={(item: any) => {
                            this.setState({
                                selectedOption: this.props.options?.filter((o) => o.id === item.id)?.[0],
                            });
                        }}
                        placeholder="请输入关键词"
                        autofocus
                    />
                </div>
                <button
                    className="btn btn-primary ml-2"
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

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
            selectedOption: this.props.options?.[0],
        };
    }

    componentDidUpdate(
        prevProps: Readonly<SimpleListToolbarProps>,
        prevState: Readonly<SimpleListToolbarState>,
        snapshot?: any,
    ) {
        if (prevProps.options !== this.props.options) {
            this.setState({
                selectedOption: this.props.options?.[0],
            });
        }
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
        const useSearch = this.props.useSearch ?? false;

        return (
            <Fragment>
                <div className="tw-z-50" style={{ width: 800 }}>
                    {useSearch && (
                        <ReactSearchAutocomplete
                            fuseOptions={{
                                threshold: 0.6,
                                ignoreLocation: true,
                                keys: ["descriptionAsText", "fuseSearchKey"],
                            }}
                            resultStringKeyName="descriptionAsText"
                            inputSearchString={this.props.options?.[0]?.descriptionAsText}
                            items={this.props.options?.map((option) => ({
                                id: option.id,
                                descriptionAsText: option.descriptionAsText,
                                fuseSearchKey: option.fuseSearchKey,
                            }))}
                            onSearch={async (text: any) => {
                                await this.props.onChange?.(text);
                            }}
                            onSelect={(item: any) => {
                                this.setState({
                                    selectedOption: this.props.options?.filter((o) => o.id === item.id)?.[0],
                                });
                            }}
                            maxResults={100}
                            placeholder="请输入关键词, 输入a: 显示前几项"
                            autofocus
                        />
                    )}
                    {!useSearch && (
                        <select
                            value={
                                this.state.selectedOption ? this.props.options?.indexOf(this.state.selectedOption) : 0
                            }
                            onChange={(e) => {
                                const selectedIndex = Number(e.target.value);

                                this.setState({
                                    selectedOption: this.props.options?.[selectedIndex],
                                });
                            }}
                        >
                            {this.props.options?.map((option, index) => (
                                <option key={index} value={index}>
                                    {option.descriptionAsText}
                                </option>
                            ))}
                        </select>
                    )}
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

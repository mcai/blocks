import React, { Component, Fragment } from "react";
import { SimpleFileInputProps } from "./SimpleFileInputProps";
import { decode, encode } from "base64-arraybuffer";
import { InputUtils } from "../InputUtils";

export class SimpleFileInput extends Component<SimpleFileInputProps, any> {
    private refFile: any;

    onUpdate(value: File | undefined) {
        if (value === undefined) {
            return;
        }

        const isTextFile = this.props.isTextFile !== undefined && this.props.isTextFile;

        const reader = new FileReader();

        reader.addEventListener("loadend", async () => {
            const data = isTextFile ? (reader.result as string) : encode(reader.result as ArrayBuffer);

            this.props.onUpdate?.(this.props.name ?? "", {
                name: value.name,
                data: data,
            });

            console.debug(`SimpleFormFileInput.onUpdate: name=${this.props.name}, value=${JSON.stringify(data)}`);
        });

        if (isTextFile) {
            reader.readAsText(value);
        } else {
            reader.readAsArrayBuffer(value);
        }
    }

    render() {
        const value = this.props.values?.[this.props.name ?? ""];

        const visible = this.props.visible === undefined || this.props.visible(this.props.values);
        const readOnly = (this.props.readOnly !== undefined && this.props.readOnly(this.props.values)) || false;

        const input = (
            <div className={this.props.className} style={this.props.style}>
                {!readOnly && (
                    <input
                        ref={(ref: any) => {
                            this.refFile = ref;
                        }}
                        type="file"
                        onChange={(e) => this.onUpdate(e.target.files?.[0])}
                    />
                )}

                {value != undefined && value.name != undefined && value.name != "" ? (
                    <Fragment>
                        <span>{value.name}&nbsp;</span>

                        <button
                            className="btn btn-primary"
                            type={"button"}
                            onClick={() => {
                                const data = decode(value.data);
                                const blob = new Blob([data]);
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement("a");
                                link.href = url;
                                link.setAttribute("download", value.name);
                                document.body.appendChild(link);
                                link.click();
                            }}
                        >
                            下载
                        </button>

                        {!readOnly && (
                            <button
                                className="btn btn-danger"
                                type={"button"}
                                onClick={() => {
                                    if (this.refFile != undefined) {
                                        this.refFile.value = "";
                                    }

                                    this.props.onUpdate?.(this.props.name ?? "", {
                                        name: "",
                                        data: {},
                                    });
                                }}
                            >
                                删除
                            </button>
                        )}
                    </Fragment>
                ) : (
                    ""
                )}
            </div>
        );

        return InputUtils.render(input, visible);
    }
}

import React, {Component} from "react";
import {SimpleFormFileInputProps} from "./SimpleFormFileInputProps";

export class SimpleFormFileInput extends Component<SimpleFormFileInputProps, any> {
    onUpdate(value: File | undefined) {
        if (value == undefined) {
            return;
        }

        let reader = new FileReader();

        reader.addEventListener('loadend', async () => {
            let data = new Uint8Array(reader.result as ArrayBuffer);
            this.props.onUpdate?.(this.props.name, data);

            console.log(`SimpleFormFileInput.onUpdate: name=${this.props.name}, value=${JSON.stringify(data)}`);
        });

        reader.readAsArrayBuffer(value);
    }

    render() {
        console.log(`SimpleFormFileInput.render: name=${this.props.name}`);

        return (
            <div className="simple-row">
                <div className="simple-center">
                    <span>{this.props.label}: </span>

                    <input
                        type="file"
                        onChange={(e) => this.onUpdate(e.target.files?.[0])}
                    />
                </div>
            </div>
        );
    }
}

import React, { Fragment } from "react";

export class InputUtils {
    static render(label: React.ReactNode, input: React.ReactNode, visible: boolean, inline: boolean) {
        const label1 = `${label ? label + ": " : ""}`;

        return (
            visible &&
            (inline ? (
                <Fragment>
                    <span>{label1}</span>
                    &nbsp;{input}
                </Fragment>
            ) : (
                <div className="simple-row">
                    <span className="simple-input-label">{label1}</span>
                    {input}
                </div>
            ))
        );
    }
}

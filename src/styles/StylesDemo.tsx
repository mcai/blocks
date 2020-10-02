import React, {Fragment} from "react";
import {SimpleRow} from "./SimpleRow/SimpleRow";

export class StylesDemo extends React.Component<any> {
    render() {
        return (
            <div className="simple-container">
                <SimpleRow>
                    <h1 className="simple-h1">
                        一级标题
                    </h1>

                    <h2 className="simple-h2">
                        二级标题
                    </h2>

                    <p className="simple-p">
                        段落
                    </p>

                    <SimpleRow
                        left={
                            <Fragment>
                                <button className="simple-button" onClick={() => alert("hello")}>
                                    左对齐1
                                </button>
                                <button className="simple-button">
                                    左对齐2
                                </button>
                                <button className="simple-button">
                                    左对齐3
                                </button>
                            </Fragment>
                        }
                        right={
                            <Fragment>
                                <button className="simple-button">
                                    右对齐1
                                </button>
                                <button className="simple-button">
                                    右对齐2
                                </button>
                                <button className="simple-button">
                                    右对齐3
                                </button>
                            </Fragment>
                        }
                    >
                        <button className="simple-button">
                            居中1
                        </button>
                        <button className="simple-button">
                            居中2
                        </button>
                        <button className="simple-button">
                            居中3
                        </button>
                    </SimpleRow>
                </SimpleRow>
            </div>
        );
    }
}

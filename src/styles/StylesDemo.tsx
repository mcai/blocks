import React, {Fragment} from "react";
import {SimpleRow} from "./SimpleRow/SimpleRow";
import {SimpleButton} from "./SimpleButton/SimpleButton";

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
                                <SimpleButton onClick={() => alert("hello")}>
                                    左对齐1
                                </SimpleButton>
                                <SimpleButton>
                                    左对齐2
                                </SimpleButton>
                                <SimpleButton>
                                    左对齐3
                                </SimpleButton>
                            </Fragment>
                        }
                        right={
                            <Fragment>
                                <SimpleButton>
                                    右对齐1
                                </SimpleButton>
                                <SimpleButton>
                                    右对齐2
                                </SimpleButton>
                                <SimpleButton>
                                    右对齐3
                                </SimpleButton>
                            </Fragment>
                        }
                    >
                        <SimpleButton>
                            居中1
                        </SimpleButton>
                        <SimpleButton>
                            居中2
                        </SimpleButton>
                        <SimpleButton>
                            居中3
                        </SimpleButton>
                    </SimpleRow>
                </SimpleRow>
            </div>
        );
    }
}

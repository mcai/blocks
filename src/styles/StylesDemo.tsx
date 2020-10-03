import React, {Fragment} from "react";

export class StylesDemo extends React.Component<any> {
    render() {
        return (
            <div className="simple-container simple-row">
                <div className="simple-center">
                    <h1 className="simple-h1">
                        一级标题
                    </h1>

                    <h2 className="simple-h2">
                        二级标题
                    </h2>

                    <p className="simple-p">
                        段落
                    </p>

                    <div className="simple-row">
                        <div className="simple-left">
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
                        </div>

                        <div className="simple-right">
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
                        </div>

                        <div className="simple-center">
                            <button className="simple-button">
                                居中1
                            </button>
                            <button className="simple-button">
                                居中2
                            </button>
                            <button className="simple-button">
                                居中3
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

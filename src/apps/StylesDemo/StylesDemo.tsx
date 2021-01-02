import React, { Fragment } from "react";

export class StylesDemo extends React.Component<any> {
    render() {
        return (
            <Fragment>
                <div className="simple-container">
                    <div className="simple-row">
                        <div className="simple-col">hello world 1</div>
                        <div className="simple-col">hello world 2</div>
                        <div className="simple-col">hello world 3</div>
                    </div>
                    <div className="simple-row">
                        <div className="simple-col">hello world 4</div>
                        <div className="simple-col">hello world 5</div>
                        <div className="simple-col">hello world 6</div>
                    </div>
                    <div className="simple-row">
                        <div className="simple-col">hello world 7</div>
                        <div className="simple-col">hello world 8</div>
                        <div className="simple-col">hello world 9</div>
                    </div>
                </div>

                <div className="simple-card">
                    <div className="simple-center">
                        <h1 className="simple-h1">一级标题</h1>

                        <h2 className="simple-h2">二级标题</h2>

                        <p className="simple-p">段落</p>
                    </div>

                    <div>
                        <div className="simple-left">
                            <Fragment>
                                <button className="btn btn-primary" onClick={() => alert("hello")}>
                                    左对齐1
                                </button>
                                <button className="btn btn-primary">左对齐2</button>
                                <button className="btn btn-primary">左对齐3</button>
                            </Fragment>
                        </div>

                        <div className="simple-right">
                            <Fragment>
                                <button className="btn btn-primary">右对齐1</button>
                                <button className="btn btn-primary">右对齐2</button>
                                <button className="btn btn-primary">右对齐3</button>
                            </Fragment>
                        </div>

                        <div className="simple-center">
                            <button className="btn btn-primary">居中1</button>
                            <button className="btn btn-primary">居中2</button>
                            <button className="btn btn-primary">居中3</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

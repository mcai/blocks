import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";
import {
    SimpleH1,
    SimpleH2,
    SimpleP,
    SimpleContainer, simpleTheme1
} from "./SimpleTheme/SimpleTheme";
import {SimpleRow} from "./SimpleRow/SimpleRow";
import { SimpleButton } from "./SimpleButton/SimpleButton";

export class StylesDemo extends React.Component<any> {
    render() {
        let fragment = (
            <SimpleContainer>
                <SimpleRow>
                    <SimpleH1>
                        一级标题
                    </SimpleH1>

                    <SimpleH2>
                        二级标题
                    </SimpleH2>

                    <SimpleP>
                        段落
                    </SimpleP>

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
            </SimpleContainer>
        );

        return (
            <ThemeProvider theme={simpleTheme1}>
                {fragment}
            </ThemeProvider>
        );
    }
}

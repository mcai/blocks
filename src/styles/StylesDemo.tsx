import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";
import {Button, H1, H2, P, Section, simpleDarkTheme, simpleLightTheme} from "./SimpleTheme";
import {SimpleRow} from "./SimpleRow";

export class StylesDemo extends React.Component<any> {
    render() {
        let fragment = (
            <Fragment>
                <Section>
                    <H1>
                        一级标题
                    </H1>

                    <H2>
                        二级标题
                    </H2>

                    <P>
                        段落
                    </P>

                    <SimpleRow
                        left={
                            <Fragment>
                                <Button>
                                    左对齐1
                                </Button>
                                <Button>
                                    左对齐2
                                </Button>
                                <Button>
                                    左对齐3
                                </Button>
                            </Fragment>
                        }
                        right={
                            <Fragment>
                                <Button>
                                    右对齐1
                                </Button>
                                <Button>
                                    右对齐2
                                </Button>
                                <Button>
                                    右对齐3
                                </Button>
                            </Fragment>
                        }
                    >
                        <Button>
                            居中1
                        </Button>
                        <Button>
                            居中2
                        </Button>
                        <Button>
                            居中3
                        </Button>
                    </SimpleRow>
                </Section>
            </Fragment>
        );

        let themes = [simpleLightTheme, simpleDarkTheme]

        return themes.map(theme => (
            <ThemeProvider theme={theme}>
                {fragment}
            </ThemeProvider>
        ));
    }
}

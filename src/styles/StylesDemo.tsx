import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";
import {H1, H2, P, Section, simpleDarkTheme, simpleLightTheme} from "./SimpleTheme";

export class StylesDemo extends React.Component<any> {
    render() {
        let fragment = (
            <Fragment>
                <Section>
                    <H1>
                        宋代：李之仪
                    </H1>

                    <H2>
                        卜算子·我住长江头
                    </H2>

                    <P>
                        我住长江头，君住长江尾。日日思君不见君，共饮长江水。
                    </P>

                    <P>
                        此水几时休，此恨何时已。只愿君心似我心，定不负相思意。
                    </P>
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

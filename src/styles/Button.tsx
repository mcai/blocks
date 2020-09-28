import React, { Fragment } from "react";
import styled from "styled-components";

let Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: dodgerblue;
`;

let Section = styled.section`
  padding: 4em;
  background: aliceblue;
  border: 1px solid dodgerblue;
`;

export class Button extends React.Component<any> {
    render() {
        return (
            <Fragment>
                <Section>
                    <Title>
                        你好，世界！
                    </Title>
                </Section>
            </Fragment>
        );
    }
}

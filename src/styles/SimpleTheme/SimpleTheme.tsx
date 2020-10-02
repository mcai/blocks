import styled from "styled-components";
import React from "react";

export interface SimpleTheme {
    LightBackground: string;
    LightForeground: string;
    Main: string;
    DarkForeground: string;
    DarkBackground: string;
}

export let simpleTheme1: SimpleTheme = {
    LightBackground: "#F3F2F4",
    LightForeground: "#6EA5C5",
    Main: "#3C7AB4",
    DarkForeground: "#657C9E",
    DarkBackground: "#242D57",
}

export let simpleTheme2: SimpleTheme = {
    LightBackground: "#F4F4F2",
    LightForeground: "#9390A0",
    Main: "#F19673",
    DarkForeground: "#EB4227",
    DarkBackground: "#1E2827",
}

export function SimpleCenter(props: any) {
    return (
        <div
            style={{
                textAlign: "center"
            }}
        >
            {props.children}
        </div>
    );
}

export function SimpleLeft(props: any) {
    return (
        <div
            style={{
                float: "left"
            }}
        >
            {props.children}
        </div>
    );
}

export function SimpleRight(props: any) {
    return (
        <div
            style={{
                float: "right"
            }}
        >
            {props.children}
        </div>
    );
}

export let SimpleH1 = styled.h1`
  font-size: 2.0em;
  color: ${props => (props.theme as SimpleTheme).DarkForeground};
`;

export let SimpleH2 = styled.h2`
  font-size: 1.5em;
  color: ${props => (props.theme as SimpleTheme).DarkForeground};
`;

export let SimpleP = styled.p`
  font-size: 1.0em;
  color: ${props => (props.theme as SimpleTheme).Main};
`;

export let SimpleSpace = styled.div`
  padding: 0.5em;
`;

export let SimpleContainer = styled.div`
  padding: 1em;
  margin: 1em;
  background: ${props => (props.theme as SimpleTheme).LightBackground};
  border: 1px solid ${props => (props.theme as SimpleTheme).DarkForeground};
  border-radius: 5px;
`;

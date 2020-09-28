import styled from "styled-components";
import React from "react";

export interface SimpleTheme {
    white: string;
    lightgray: string;
    gray: string;
    darkgray: string;
    black: string;
}

// 粉色无尽夏
export let simpleLightTheme: SimpleTheme = {
    white: "#E7ECE8",
    lightgray: "#DDAFBC",
    gray: "#B37C93",
    darkgray: "#B0597C",
    black: "#172D18",
};

// 夜空中的月亮
export let simpleDarkTheme: SimpleTheme = {
    white: "#000000",
    lightgray: "#76A2AF",
    gray: "#BCD9E1",
    darkgray: "#DCEFF5",
    black: "#EDEDED",
}

export let SimpleCenter = styled.div`
  text-align: center;
`;

export let SimpleLeft = styled.div`
  float: left;
`;

export let SimpleRight = styled.div`
  float: right;
`;

export let SimpleH1 = styled.h1`
  font-size: 2.0em;
  color: ${props => (props.theme as SimpleTheme).darkgray};
`;

export let SimpleH2 = styled.h2`
  font-size: 1.5em;
  color: ${props => (props.theme as SimpleTheme).gray};
`;

export let SimpleP = styled.p`
  font-size: 1.0em;
  color: ${props => (props.theme as SimpleTheme).black};
`;

export let SimpleSpace = styled.div`
  padding: 0.5em;
`;

export let SimpleContainer = styled.div`
  padding: 1em;
  margin: 1em;
  background: ${props => (props.theme as SimpleTheme).white};
  border: 1px solid ${props => (props.theme as SimpleTheme).black};
  border-radius: 5px;
`;

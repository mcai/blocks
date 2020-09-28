import styled from "styled-components";

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

export let H1 = styled.h1`
  font-size: 2.0em;
  text-align: center;
  color: ${props => (props.theme as SimpleTheme).darkgray};
`;

export let H2 = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: ${props => (props.theme as SimpleTheme).gray};
`;

export let P = styled.p`
  font-size: 1.0em;
  text-align: center;
  color: ${props => (props.theme as SimpleTheme).black};
`;

export let Section = styled.section`
  padding: 4em;
  background: ${props => (props.theme as SimpleTheme).white};
  border: 1px solid ${props => (props.theme as SimpleTheme).black};
`;

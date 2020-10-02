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

export let SimpleThemeContext = React.createContext(simpleTheme1);

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

export function SimpleH1(props: any) {
    return (
        <SimpleThemeContext.Consumer>
            {
                theme => (
                    <h1
                        style={{
                            fontSize: "2.0em",
                            color: theme.DarkForeground
                        }}
                    >
                        {props.children}
                    </h1>
                )
            }
        </SimpleThemeContext.Consumer>
    );
}

export function SimpleH2(props: any) {
    return (
        <SimpleThemeContext.Consumer>
            {
                theme => (
                    <h2
                        style={{
                            fontSize: "1.5em",
                            color: theme.DarkForeground
                        }}
                    >
                        {props.children}
                    </h2>
                )
            }
        </SimpleThemeContext.Consumer>
    );
}

export function SimpleP(props: any) {
    return (
        <SimpleThemeContext.Consumer>
            {
                theme => (
                    <p
                        style={{
                            fontSize: "1.0em",
                            color: theme.Main
                        }}
                    >
                        {props.children}
                    </p>
                )
            }
        </SimpleThemeContext.Consumer>
    );
}

export function SimpleSpace(props: any) {
    return (
        <div
            style={{
                padding: "0.5em"
            }}
        >
            {props.children}
        </div>
    );
}

export function SimpleContainer(props: any) {
    return (
        <SimpleThemeContext.Consumer>
            {
                theme => (
                    <div
                        style={{
                            padding: "1em",
                            margin: "1em",
                            background: `${theme.LightBackground}`,
                            border: `1px solid ${theme.DarkForeground}`,
                            borderRadius: "5px"
                        }}
                    >
                        {props.children}
                    </div>
                )
            }
        </SimpleThemeContext.Consumer>
    );
}

import React, {Component} from "react";
import {SimpleTodoAppProps} from "./SimpleTodoAppProps";
import {SimpleTodoAppState} from "./SimpleTodoAppState";
import {SimpleBreadcrumb} from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";
import {SimpleFooter} from "../../components/SimpleFooter/SimpleFooter";
import {SimpleList} from "../../components/SimpleList/SimpleList";
import {simpleTheme2, SimpleThemeContext} from "../../styles/SimpleTheme/SimpleTheme";
import {SimpleNavbar} from "../../components/SimpleNavbar/SimpleNavbar";

export class SimpleTodoApp extends Component<SimpleTodoAppProps, SimpleTodoAppState> {
    render() {
        return (
            <SimpleThemeContext.Provider value={simpleTheme2}>
                <SimpleNavbar
                    brand={{
                        title: "Simple TODOs",
                        href: "/"
                    }}
                    sections={[
                        {
                            id: "todos",
                            title: "TODOs",
                            items: [
                                {
                                    key: "todos",
                                    title: "TODOs",
                                    href: "/todos"
                                }
                            ]
                        },
                        {
                            rightAligned: true,
                            id: "settings",
                            title: "Settings",
                            items: [
                                {
                                    key: "users",
                                    title: "Users",
                                    href: "/users"
                                },
                                {
                                    key: "eventLogs",
                                    title: "Event Logs",
                                    href: "/eventLogs"
                                }
                            ]
                        },
                        {
                            id: "help",
                            title: "Help",
                            items: [
                                {
                                    key: "help",
                                    title: "Help",
                                    href: "/help"
                                },
                                {
                                    key: "about",
                                    title: "About",
                                    href: "/about"
                                }
                            ]
                        }
                    ]}
                />

                <SimpleBreadcrumb items={[
                    {
                        key: "home",
                        title: "Home",
                        href: "/"
                    },
                    {
                        key: "todos",
                        title: "TODOs",
                        active: true
                    },
                ]}/>

                <SimpleList
                    addFormOptions={[
                        {
                            name: "simpleTodo",
                            description: "Simple TODO",
                            getValuesFunc: () => ({
                                "content": ""
                            })
                        }
                    ]}
                />

                <SimpleFooter brand={
                    {
                        title: "Simple TODOs (C) 2020",
                        href: ""
                    }
                }/>
            </SimpleThemeContext.Provider>
        );
    }
}

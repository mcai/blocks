import React, {Component, Fragment} from "react";
import {SimpleTodoAppProps} from "./SimpleTodoAppProps";
import {SimpleTodoAppState} from "./SimpleTodoAppState";
import {SimpleNavbar} from "../../components/SimpleNavbar/SimpleNavbar";
import {SimpleBreadcrumb} from "../../components/SimpleBreadcrumb/SimpleBreadcrumb";

export class SimpleTodoApp extends Component<SimpleTodoAppProps, SimpleTodoAppState> {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

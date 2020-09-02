import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SimpleAppProps} from "./SimpleAppProps";
import {SimpleAppState} from "./SimpleAppState";

export class SimpleApp extends Component<SimpleAppProps, SimpleAppState>{
    render() {
        return (
            <BrowserRouter>
                {this.props.navbar}

                <Switch>
                    {
                        this.props.routes.map(route => (
                            <Route exact path={route.path}>
                                {route.page}
                            </Route>
                        ))
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

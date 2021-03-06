import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SimpleAppProps } from "./SimpleAppProps";
import { SimpleAppState } from "./SimpleAppState";
import { SimpleToast } from "../SimpleToast/SimpleToast";

export class SimpleApp extends Component<SimpleAppProps, SimpleAppState> {
    render() {
        return (
            <Fragment>
                <SimpleToast />
                {this.props.navbar}

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div className="container-fluid">
                        <Switch>
                            {this.props.routes.map((route) => (
                                <Route exact path={route.path} key={route.path}>
                                    {route.page}
                                </Route>
                            ))}
                        </Switch>
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}

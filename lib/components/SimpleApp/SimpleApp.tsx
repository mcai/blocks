import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {SimpleAppProps} from "./SimpleAppProps";
import {SimpleAppState} from "./SimpleAppState";
import {Container} from "react-bootstrap";

export class SimpleApp extends Component<SimpleAppProps, SimpleAppState>{
    render() {
        return (
            <Container>
                <HashRouter basename="/">
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
                </HashRouter>
            </Container>
        );
    }
}

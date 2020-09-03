import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SimpleAppProps} from "./SimpleAppProps";
import {SimpleAppState} from "./SimpleAppState";
import {Container} from "react-bootstrap";
import {SimpleToast} from "../SimpleToast/SimpleToast";

export class SimpleApp extends Component<SimpleAppProps, SimpleAppState>{
    render() {
        return (
            <Container>
                <SimpleToast/>

                <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            </Container>
        );
    }
}

import React, {Component, Fragment} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SimpleAppProps} from "./SimpleAppProps";
import {SimpleAppState} from "./SimpleAppState";
import {Container} from "react-bootstrap";
import {SimpleToast} from "../SimpleToast/SimpleToast";

export class SimpleApp extends Component<SimpleAppProps, SimpleAppState>{
    render() {
        return (
            <Fragment>
                <SimpleToast/>
                {this.props.navbar}

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Container>
                        <Switch>
                            {
                                this.props.routes.map(route => (
                                    <Route exact path={route.path}>
                                        <Container>
                                            {route.page}
                                        </Container>
                                    </Route>
                                ))
                            }
                        </Switch>
                    </Container>
                </BrowserRouter>
            </Fragment>
        );
    }
}

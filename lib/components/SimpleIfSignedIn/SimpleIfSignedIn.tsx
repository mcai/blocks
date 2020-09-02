import React, {Component} from "react";
import {SimpleIfSignedInState} from "./SimpleIfSignedInState";
import {SimpleIfSignedInProps} from "./SimpleIfSignedInProps";
import {SimpleIf} from "../SimpleIf/SimpleIf";

export class SimpleIfSignedIn extends Component<SimpleIfSignedInProps, SimpleIfSignedInState> {
    constructor(props: SimpleIfSignedInProps) {
        super(props);

        this.state = {
            isDataLoaded: false,
            user: undefined,
            denied: false
        };
    }

    async componentDidMount() {
        await this.loadData();
    }

    private async loadData() {
        let user = await this.props.cookie.getUser();

        this.setState({
            isDataLoaded: true,
            user: user
        });

        if (user != null && this.props.extraCondition != null && !this.props.extraCondition(this.state.user!)) {
            this.setState({
                denied: true
            });
        }
    }

    render(): React.ReactNode {
        if (this.state.denied) {
            return this.props.deniedComponent;
        }

        return (
            <SimpleIf condition={this.state.isDataLoaded}>
                {
                    this.state.user
                        ? this.props.children
                        : this.props.signInComponent
                }
            </SimpleIf>
        );
    }
}

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as queryString from "querystring";
import { SimpleResourceAppProps } from "./SimpleResourceAppProps";
import pluralize from "pluralize";
import { SimpleRoute } from "../../components/SimpleApp/SimpleRoute";
import { FindPage } from "../../pages/FindPage/FindPage";
import { CreatePage } from "../../pages/CreatePage/CreatePage";
import { UpdatePage } from "../../pages/UpdatePage/UpdatePage";
import { SimpleApp } from "../../components/SimpleApp/SimpleApp";
import { SimpleNavbar } from "../../components/SimpleNavbar/SimpleNavbar";
import { SimpleFooter } from "../../components/SimpleFooter/SimpleFooter";

function useParams(props: any) {
    return props.match.params;
}

function useQuery(props: any) {
    const search = props.location.search;
    return queryString.parse(search.startsWith("?") ? search.substring(1) : search);
}

export class SimpleResourceApp extends Component<SimpleResourceAppProps, any> {
    render() {
        const routes: SimpleRoute[] = [
            {
                path: `/${pluralize(this.props.resource.name)}`,
                page: (
                    <FindPage resource={this.props.resource} serverDataProviderUrl={this.props.serverDataProviderUrl} />
                ),
            },
            {
                path: `/add${this.props.resource.name}`,
                page: (
                    <CreatePage
                        resource={this.props.resource}
                        serverDataProviderUrl={this.props.serverDataProviderUrl}
                    />
                ),
            },
            {
                path: `/${this.props.resource.name}/:id`,
                page: withRouter((props) => {
                    const { id } = useParams(props);

                    return (
                        <UpdatePage
                            id={id}
                            resource={this.props.resource}
                            serverDataProviderUrl={this.props.serverDataProviderUrl}
                        />
                    );
                }),
            },
        ];

        return (
            <div className="SimpleTheme3">
                <SimpleApp
                    navbar={
                        <SimpleNavbar
                            brand={this.props.brand}
                            sections={[
                                {
                                    id: `${pluralize(this.props.resource.name)}`,
                                    title: `${this.props.resource.title}`,
                                    items: [
                                        {
                                            key: `${pluralize(this.props.resource.name)}`,
                                            title: `${this.props.resource.title}`,
                                            href: `/${pluralize(this.props.resource.name)}`,
                                        },
                                    ],
                                },
                            ]}
                        />
                    }
                    routes={routes}
                />

                <div className="simple-space" />

                <SimpleFooter brand={this.props.brand} />
            </div>
        );
    }
}

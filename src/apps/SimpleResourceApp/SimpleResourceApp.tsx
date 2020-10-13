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
import { SimpleResource } from "../../data/SimpleResource";

function useParams(props: any) {
    return props.match.params;
}

function useQuery(props: any) {
    const search = props.location.search;
    return queryString.parse(search.startsWith("?") ? search.substring(1) : search);
}

export class SimpleResourceApp extends Component<SimpleResourceAppProps, any> {
    render() {
        let routes: SimpleRoute[] = [];
        let sections: any[] = [];

        this.props.resources.forEach((resource: SimpleResource) => {
            routes = routes.concat([
                {
                    path: `/${pluralize(resource.name)}`,
                    page: <FindPage resource={resource} serverDataProviderUrl={this.props.serverDataProviderUrl} />,
                },
                {
                    path: `/add${resource.name}`,
                    page: <CreatePage resource={resource} serverDataProviderUrl={this.props.serverDataProviderUrl} />,
                },
                {
                    path: `/${resource.name}/:id`,
                    page: withRouter((props) => {
                        const { id } = useParams(props);

                        return (
                            <UpdatePage
                                id={id}
                                resource={resource}
                                serverDataProviderUrl={this.props.serverDataProviderUrl}
                            />
                        );
                    }),
                },
            ]);

            sections = sections.concat([
                {
                    id: `${pluralize(resource.name)}`,
                    title: `${resource.title}`,
                    items: [
                        {
                            key: `${pluralize(resource.name)}`,
                            title: `${resource.title}`,
                            href: `/${pluralize(resource.name)}`,
                        },
                    ],
                },
            ]);
        });

        return (
            <div className="SimpleTheme3">
                <SimpleApp navbar={<SimpleNavbar brand={this.props.brand} sections={sections} />} routes={routes} />
                <div className="simple-space" />
                <SimpleFooter brand={this.props.brand} />
            </div>
        );
    }
}

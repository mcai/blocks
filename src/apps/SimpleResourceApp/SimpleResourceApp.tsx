import React, { Component, Fragment } from "react";
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

export function useParams(props: any) {
    return props.match.params;
}

export function useQuery(props: any) {
    const search = props.location.search;
    return queryString.parse(search.startsWith("?") ? search.substring(1) : search);
}

export function getRoutes(
    baseUrl: string,
    resource: SimpleResource,
    findPageFunc?: (baseUrl: string, resource: SimpleResource) => React.ReactNode,
    createPageFunc?: (baseUrl: string, resource: SimpleResource) => React.ReactNode,
    updatePageFunc?: (baseUrl: string, resource: SimpleResource, id: number) => React.ReactNode,
) {
    return [
        {
            path: `/${pluralize(resource.name)}`,
            page: findPageFunc?.(baseUrl, resource) || <FindPage baseUrl={baseUrl} resource={resource} />,
        },
        {
            path: `/add${resource.name}`,
            page: createPageFunc?.(baseUrl, resource) || <CreatePage baseUrl={baseUrl} resource={resource} />,
        },
        {
            path: `/${resource.name}/:id`,
            page: withRouter((props) => {
                const { id } = useParams(props);

                return (
                    <Fragment>
                        {updatePageFunc?.(baseUrl, resource, id) || (
                            <UpdatePage baseUrl={baseUrl} resource={resource} id={id} />
                        )}
                    </Fragment>
                );
            }),
        },
    ];
}

export function getSections(resource: SimpleResource) {
    return [
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
    ];
}

export class SimpleResourceApp extends Component<SimpleResourceAppProps, any> {
    render() {
        let allRoutes: SimpleRoute[] = [];
        let allSections: any[] = [];

        this.props.resources.forEach((resource: SimpleResource) => {
            const routes = getRoutes(this.props.baseUrl, resource);
            const sections = getSections(resource);

            allRoutes = allRoutes.concat(routes);
            allSections = allSections.concat(sections);
        });

        return (
            <div className="SimpleTheme3">
                <SimpleApp
                    navbar={<SimpleNavbar brand={this.props.brand} sections={allSections} />}
                    routes={allRoutes}
                />
                <div className="simple-space" />
                <SimpleFooter brand={this.props.brand} />
            </div>
        );
    }
}

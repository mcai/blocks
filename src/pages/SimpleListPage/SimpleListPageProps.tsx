import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface SimpleListPageProps {
    baseUrl: string;
    resource: SimpleResource;
    initialOrdering: {
        key: string;
        descending: boolean;
    };
    filter: any;
    transform?: {
        jsonata: string;
    };

    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];

    createButtonVisible?: boolean;
}

import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface ListPageProps {
    baseUrl: string;
    resource: SimpleResource;
    initialOrdering: {
        key: string;
        descending: boolean;
    };
    filter: any;

    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

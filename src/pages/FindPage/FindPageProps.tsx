import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface FindPageProps {
    baseUrl: string;
    resource: SimpleResource;
    filter?: any;
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

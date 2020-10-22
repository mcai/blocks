import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface EditPageProps {
    baseUrl: string;
    resource: SimpleResource;
    filter: any;
    initialValues?: any;
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

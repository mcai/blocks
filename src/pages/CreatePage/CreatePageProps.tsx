import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface CreatePageProps {
    baseUrl: string;
    resource: SimpleResource;
    initialValues?: any;
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

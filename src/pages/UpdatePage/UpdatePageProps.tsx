import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface UpdatePageProps {
    baseUrl: string;
    resource: SimpleResource;
    id: any;
    initialValues?: any;
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface SimpleCreatePageProps {
    baseUrl: string;
    resource: SimpleResource;
    initialValues?: any;
    onBeforeSubmit?: (values: any) => Promise<any>;
    onSuccessRedirect?: (item: any) => string;
    breadCrumbItems?: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        active?: boolean;
    }[];
}

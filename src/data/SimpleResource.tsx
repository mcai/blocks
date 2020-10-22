import React from "react";
import { SimpleDataProvider } from "./SimpleDataProvider";

export interface SimpleResource {
    name: string;
    title: string;

    fieldsFunc: (
        resource: SimpleResource,
        dataProvider: SimpleDataProvider,
        loadTableDataFunc: () => Promise<void>,
    ) => React.ReactNode[];

    inputs: React.ReactNode[];

    initialValues?: any;

    idFunc?: (item: any) => string;
    keyFunc?: (values: any) => string | number;
    titleFunc?: (item: any) => React.ReactNode;

    initialOrdering: {
        key: string;
        descending: boolean;
    };
}

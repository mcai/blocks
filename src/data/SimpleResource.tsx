import React from "react";

export interface SimpleResource {
    name: string;
    title: string;

    fieldsFunc: (
        resource: SimpleResource,
        dataProvider: any,
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

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
    titleFunc?: (item: any) => React.ReactNode;
}

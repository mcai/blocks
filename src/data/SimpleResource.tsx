import React from "react";
import { SimpleDataProvider } from "./SimpleDataProvider";
import { SimpleTableRowType } from "../components/SimpleTable/SimpleTableRowType";

export interface SimpleResource {
    name: string;
    title: string;

    fieldsFunc: (
        resource: SimpleResource,
        dataProvider: SimpleDataProvider,
        loadTableDataFunc: () => Promise<void>,
    ) => React.ReactNode[];

    inputsFunc: (props: any) => React.ReactNode[];

    initialValues?: any;

    rowTypeFunc?: (item: any) => SimpleTableRowType;

    idFunc?: (item: any) => string;
    keyFunc?: (item: any) => string | number;
    titleFunc?: (item: any) => React.ReactNode;

    initialOrdering: {
        key: string;
        descending: boolean;
    };
}

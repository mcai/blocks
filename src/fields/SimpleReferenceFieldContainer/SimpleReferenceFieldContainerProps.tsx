import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleReferenceFieldContainerProps {
    dataProvider: SimpleDataProvider;
    resource: string;

    action: string;
    ordering?: any;
    filter?: {
        [key: string]: any;
    };

    toOptionFunc: (
        item: any,
    ) => {
        key: string;
        value: string;
        text: React.ReactNode;
    };

    title?: React.ReactNode;

    values?: any;
}

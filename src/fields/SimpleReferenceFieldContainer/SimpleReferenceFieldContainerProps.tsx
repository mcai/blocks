import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleReferenceFieldContainerProps {
    dataProvider: SimpleDataProvider;
    resource: string;

    action: string;
    ordering: {
        key: string;
        descending: boolean;
    };
    filter: any;

    toOptionFunc: (
        item: any,
    ) => {
        key: string;
        value: string;
        text: React.ReactNode;
    };

    values?: any;

    title?: React.ReactNode;
}

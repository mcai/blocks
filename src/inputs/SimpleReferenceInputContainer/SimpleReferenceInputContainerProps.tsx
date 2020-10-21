import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleReferenceInputContainerProps {
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

    values?: any;

    onUpdate?: (name: string, value: any) => void;
}

import React from "react";

export interface SimpleTabInputContainerProps {
    selectedTabKey: string;

    tabs: {
        key: string;
        description?: React.ReactNode;
        inputs: React.ReactNode[];
    }[];

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}

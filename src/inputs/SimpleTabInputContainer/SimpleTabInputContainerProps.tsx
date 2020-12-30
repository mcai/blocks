import React from "react";

export interface SimpleTabInputContainerProps {
    selectedTabKey: string;

    tabs: {
        key: string;
        description?: React.ReactNode;
        input: React.ReactNode;
    }[];

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;
}

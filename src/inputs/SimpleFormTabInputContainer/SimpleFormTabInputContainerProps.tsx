import React from "react";

export interface SimpleFormTabInputContainerProps {
    selectedTabKey: string;

    tabs: {
        key: string;
        description?: React.ReactNode;
        inputs: React.ReactNode[];
    }[];

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}

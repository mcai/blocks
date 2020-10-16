import React from "react";

export interface SimpleFormTabInputContainerProps {
    selectedTabName: any;

    tabs: {
        name: any;
        description?: React.ReactNode;
        inputs: React.ReactNode[];
    }[];

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}

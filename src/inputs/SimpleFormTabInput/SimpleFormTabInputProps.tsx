import React from "react";

export interface SimpleFormTabInputProps {
    label?: React.ReactNode;

    name?: string;

    selectedTabId: any;

    tabs: {
        id: any;
        description?: React.ReactNode;
        inputs: React.ReactNode[];
    }[];

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}

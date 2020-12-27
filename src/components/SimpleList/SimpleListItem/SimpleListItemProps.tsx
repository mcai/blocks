import React from "react";

export interface SimpleListItemProps {
    id: any;

    description?: React.ReactNode;

    inputsFunc?: (values: any) => React.ReactNode[];

    index: number;

    values: any;

    onUpdate?: (index: number, name: string, value: any) => void;

    onRemove?: (index: number) => void;

    readOnly?: boolean;
}

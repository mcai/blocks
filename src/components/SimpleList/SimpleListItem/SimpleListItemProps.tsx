import React from "react";

export interface SimpleListItemProps {
    id: any;

    description?: React.ReactNode;

    inputs: { [name: string]: React.ReactNode | undefined };

    index: number;

    values: { [name: string]: any };

    onUpdate?: (index: number, name: string, value: any) => void;

    onRemove?: (index: number) => void;

    readOnly?: boolean;
}

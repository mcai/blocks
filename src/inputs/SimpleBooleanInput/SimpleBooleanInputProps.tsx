import React from "react";

export interface SimpleBooleanInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    inline?: boolean;
}

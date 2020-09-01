import React from "react";

export interface SimpleBooleanFieldProps {
    name: string;
    title?: React.ReactNode;
    value?: boolean;
    placeholder?: string;
    hint?: React.ReactNode;
}

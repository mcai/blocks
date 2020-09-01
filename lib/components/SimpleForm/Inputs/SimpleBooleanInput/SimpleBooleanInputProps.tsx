import React from "react";

export interface SimpleBooleanInputProps {
    name: string;
    title?: React.ReactNode;
    value?: boolean;
    placeholder?: string;
    hint?: React.ReactNode;
}

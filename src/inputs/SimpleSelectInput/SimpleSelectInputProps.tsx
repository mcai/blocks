import React from "react";

export interface SimpleSelectInputProps {
    label: React.ReactNode;
    name: string;
    options: {
        key: string;
        value: string;
        text?: React.ReactNode;
    }[];
}

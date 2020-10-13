import React from "react";

export interface SimpleSelectInputProps {
    label: React.ReactNode;
    name: string;
    options: {
        key: string | number;
        value: string;
        text?: React.ReactNode;
    }[];
}

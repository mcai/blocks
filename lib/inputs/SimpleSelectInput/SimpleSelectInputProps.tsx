import React from "react";

export interface SimpleSelectInputProps {
    label: React.ReactNode;
    name: string;
    options: {value: string, label: string}[];
}

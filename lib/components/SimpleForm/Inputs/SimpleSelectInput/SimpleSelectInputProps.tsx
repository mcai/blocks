import React from "react";

export interface SimpleSelectInputProps {
    label: React.ReactNode;
    record: any;
    source: string;
    options: {value: string, label: string}[]
}

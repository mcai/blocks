import React from "react";

export interface SimpleSelectFieldProps {
    label: React.ReactNode;
    record: any;
    source: string;
    options: {value: string, label: string}[];
}

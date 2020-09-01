import React from "react";

export interface SimpleNumberInputProps {
    label: React.ReactNode;
    record: any;
    source: string;
    min?: number;
    max?: number;
}

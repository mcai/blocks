import React from "react";

export interface SimpleNumberInputProps {
    label: React.ReactNode;
    name: string;
    min?: number;
    max?: number;
}

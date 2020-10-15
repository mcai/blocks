import React from "react";

export interface SimpleListOption {
    id: any;

    description?: React.ReactNode;

    descriptionAsText?: string;

    inputs: React.ReactNode[];

    values: { [name: string]: any };
}

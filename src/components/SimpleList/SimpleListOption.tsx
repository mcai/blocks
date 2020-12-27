import React from "react";

export interface SimpleListOption {
    id: any;

    description?: React.ReactNode;

    descriptionAsText?: string;

    inputsFunc?: (props: any) => React.ReactNode[];

    values: { [name: string]: any };
}

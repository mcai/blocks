import React from "react";

export interface SimpleListOption {
    id: any;

    description?: React.ReactNode;

    descriptionAsText?: string;

    inputFunc?: (props: any) => React.ReactNode;

    values: { [name: string]: any };
}

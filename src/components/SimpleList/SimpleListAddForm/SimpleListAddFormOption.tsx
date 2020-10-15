import React from "react";

export interface SimpleListAddFormOption {
    id: any;

    description?: React.ReactNode;

    descriptionAsText?: string;

    inputs: { [name: string]: React.ReactNode | undefined };

    values: { [name: string]: any };
}

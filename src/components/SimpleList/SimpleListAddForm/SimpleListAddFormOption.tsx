import React from "react";

export interface SimpleListAddFormOption {
    name: string;

    description?: React.ReactNode;

    descriptionAsText?: string;

    inputs: { [name: string]: React.ReactNode | undefined };

    values: { [name: string]: any };
}

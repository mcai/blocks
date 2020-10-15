import React from "react";

export interface SimpleListItemType {
    name: string;

    description?: React.ReactNode;

    inputs: { [name: string]: React.ReactNode | undefined };

    values: { [name: string]: any };
}

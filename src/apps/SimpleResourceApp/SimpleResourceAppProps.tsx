import React from "react";
import { SimpleResource } from "../../data/SimpleResource";

export interface SimpleResourceAppProps {
    brand: {
        title: string;
        href: string;
    };
    resources: SimpleResource[];
    baseUrl: string;
}

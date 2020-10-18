import React from "react";
import { SimpleField } from "../fields/SimpleField";

export interface SimpleResource {
    name: string;
    title: string;
    fields: SimpleField[];
    inputs: React.ReactNode[];
    initialValues?: any;
    titleFunc?: (item: any) => React.ReactNode;
}

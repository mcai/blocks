import React from "react";
import { SimpleField } from "../fields/SimpleField";

export interface SimpleResource {
    name: string;
    title: string;
    fieldsFunc: (resource: SimpleResource, dataProvider: any, loadTableDataFunc: () => Promise<void>) => SimpleField[];
    inputsFunc: (item: any) => React.ReactNode[];
    initialValues?: any;
    titleFunc?: (item: any) => React.ReactNode;
}

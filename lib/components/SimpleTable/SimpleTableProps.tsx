import {SimpleField} from "../../fields/SimpleField";
import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleTableProps {
    pageSize: number
    initialPageNum: number

    dataProvider: SimpleDataProvider
    resource: string
    action: string

    fields: SimpleField[]

    extra?: React.ReactNode
}

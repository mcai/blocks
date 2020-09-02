import {SimpleTableField} from "./SimpleTableField";
import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleTableProps {
    pageSize: number
    pageNum: number

    dataProvider: SimpleDataProvider
    resource: string
    action: string

    fields: SimpleTableField[]

    extra?: React.ReactNode
}

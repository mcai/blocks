import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleFormProps {
    dataProvider: SimpleDataProvider
    resource: string
    getByIdAction: string
    updateAction: string

    id: number

    inputs: React.ReactNode[]

    submitButtonText?: string
}

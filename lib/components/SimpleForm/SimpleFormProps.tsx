import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleFormProps {
    dataProvider: SimpleDataProvider
    resource: string
    action: string

    id: number

    inputs: React.ReactNode[]

    submitButtonText?: string
}

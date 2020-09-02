import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleAddFormProps {
    dataProvider: SimpleDataProvider
    resource: string
    addAction: string

    inputs: React.ReactNode[]

    submitButtonText?: string
}

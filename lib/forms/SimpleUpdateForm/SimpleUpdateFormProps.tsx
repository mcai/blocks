import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleUpdateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    getByIdAction: string;
    updateAction: string;

    id: number;

    getByIdExtraData?: any;
    updateExtraData?: any;

    inputs: React.ReactNode[];

    submitButtonText?: string;
}

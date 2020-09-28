import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleAddFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any
    addAction: string;

    addExtraData?: any;

    inputs: React.ReactNode[];

    submitButtonText?: string;

    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;
}

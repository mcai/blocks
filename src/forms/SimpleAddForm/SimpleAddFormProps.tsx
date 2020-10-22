import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleAddFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any;

    addAction: string;
    addExtraData?: any;
    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;

    inputs: React.ReactNode[];

    submitButtonText?: string;
}

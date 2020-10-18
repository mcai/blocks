import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleUpdateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any;
    getByIdAction: string;
    onGetByIdResult?: (item: any) => void;
    updateAction: string;

    id: any;

    getByIdExtraData?: any;
    updateExtraData?: any;

    inputsFunc: (item: any) => React.ReactNode[];

    submitButtonText?: string;

    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;
}

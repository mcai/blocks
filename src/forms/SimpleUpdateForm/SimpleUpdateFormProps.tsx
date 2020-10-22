import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleUpdateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any;

    filter: any;

    oneAction: string;
    oneExtraData?: any;
    onOneResult?: (item: any) => void;

    updateAction: string;
    updateExtraData?: any;
    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;

    inputs: React.ReactNode[];

    submitButtonText?: string;
}

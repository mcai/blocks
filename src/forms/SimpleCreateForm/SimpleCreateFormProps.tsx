import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleCreateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any;

    createAction: string;
    createExtraData?: any;
    onBeforeSubmit?: (values: any) => Promise<any>;
    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;

    inputsFunc: (props: any) => React.ReactNode[];

    submitButtonText?: string;
}

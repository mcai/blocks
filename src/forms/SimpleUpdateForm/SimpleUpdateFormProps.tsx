import React from "react";
import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleUpdateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    initialValues?: any;

    filter: any;

    getOneAction: string;
    getOneExtraData?: any;
    onGetOneResult?: (item: any) => void;

    updateAction: string;
    updateExtraData?: any;
    onBeforeSubmit?: (values: any) => Promise<any>;
    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;

    inputsFunc: (props: any) => React.ReactNode[];

    submitButtonText?: string;
}

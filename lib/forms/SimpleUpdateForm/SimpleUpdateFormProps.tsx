import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleUpdateFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    getByIdAction: string;
    onGetIdResult?: (item: any) => void;
    updateAction: string;

    id: number;

    getByIdExtraData?: any;
    updateExtraData?: any;

    inputs: React.ReactNode[];

    submitButtonText?: string;

    onSuccess?: (item: any) => void;
    onSuccessRedirect?: (item: any) => string;
    onFailure?: () => void;
}

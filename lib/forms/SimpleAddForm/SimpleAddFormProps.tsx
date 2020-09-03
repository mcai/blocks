import React from "react";
import {SimpleDataProvider} from "../../data/SimpleDataProvider";

export interface SimpleAddFormProps {
    dataProvider: SimpleDataProvider;
    resource: string;
    addAction: string;

    addExtraData?: any;

    inputs: React.ReactNode[];

    submitButtonText?: string;

    onSuccess?: (item: any) => void;
    onSuccessRedirect?: string;
    onFailure?: () => void;
}

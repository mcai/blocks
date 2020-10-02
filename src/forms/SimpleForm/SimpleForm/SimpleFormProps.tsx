import React from "react";

export interface SimpleFormProps {
    initialValues?: { [name: string]: string };

    onSubmit?: (values: { [name: string]: string }) => void;

    submitButtonText?: string;
}

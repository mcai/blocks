export interface SimpleFormProps {
    initialValues?: { [name: string]: any };

    onGetExtraValues?: (values: { [name: string]: any }) => { [name: string]: any };

    onSubmit?: (values: { [name: string]: any }) => void;

    submitButtonText?: string;
}

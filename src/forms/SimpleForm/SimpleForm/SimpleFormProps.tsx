export interface SimpleFormProps {
    initialValues?: { [name: string]: any };

    onSubmit?: (values: { [name: string]: any }) => void;

    submitButtonText?: string;
}

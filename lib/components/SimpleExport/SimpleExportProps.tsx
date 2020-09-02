import {SimpleDataProvider} from "../../data/SimpleDataProvider";
import {SimpleField} from "../../fields/SimpleField";

export interface SimpleExportProps {
    pageSize: number

    startPageNum?: number
    endPageNum?: number

    dataProvider: SimpleDataProvider
    resource: string
    action: string

    fields: SimpleField[]

    buttonText?: string
}

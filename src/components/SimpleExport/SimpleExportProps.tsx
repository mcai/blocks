import { SimpleDataProvider } from "../../data/SimpleDataProvider";
import { SimpleField } from "../../fields/SimpleField";

export interface SimpleExportProps {
    pageSize: number;

    startPageNum?: number;
    endPageNum?: number;
    ordering?: any;

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    filter?: any;

    fields: SimpleField[];

    onBeginExport?: () => void;
    onExporting?: (pageCount: number, pageNum: number) => void;
    onEndExport?: () => void;
}

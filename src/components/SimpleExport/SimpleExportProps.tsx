import { SimpleDataProvider } from "../../data/SimpleDataProvider";

export interface SimpleExportProps {
    pageSize: number;

    startPageNum?: number;
    endPageNum?: number;
    ordering?: any;

    dataProvider: SimpleDataProvider;
    resource: string;
    action: string;

    filter?: any;

    onBeginExport?: () => void;
    onExporting?: (pageCount: number, pageNum: number) => void;
    onEndExport?: () => void;
}

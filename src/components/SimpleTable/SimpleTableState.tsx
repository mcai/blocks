export interface SimpleTableState {
    pageNum: number;
    ordering?: any;
    count: number;
    pageCount: number;
    itemsInCurrentPage: {
        key: string;
        [name: string]: any;
    }[];
    loadingData: boolean;

    exportLoadingActive: boolean;
    exportLoadingText: string;
}

export interface SimpleTableState {
    pageNum: number;
    ordering: {
        key: string;
        descending: boolean;
    };
    count: number;
    pageCount: number;
    itemsInCurrentPage: any[];
    loadingData: boolean;

    exportLoadingActive: boolean;
    exportLoadingText: string;
}

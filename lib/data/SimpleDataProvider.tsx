export interface SimpleDataProvider {
    getList<ItemT>(
        resource: string,
        action: string,
        params: {
            pageSize: number,
            pageNum: number,
            ordering?: string,
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        count: number,
        pageCount: number,
        itemsInCurrentPage: ItemT[]
    }>;

    getById<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number
        }
    ): Promise<RecordT>

    add<RecordT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT>;

    update<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number,
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT>;

    remove<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number
        }
    ): Promise<void>;
}

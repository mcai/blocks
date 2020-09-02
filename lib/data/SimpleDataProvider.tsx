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
    } | undefined>;

    getById<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number
        }
    ): Promise<RecordT | undefined>

    add<RecordT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined>;

    update<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number,
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined>;

    remove<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number
        }
    ): Promise<void>;
}

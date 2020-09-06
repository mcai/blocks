export interface SimpleDataProvider {
    getList<ItemT>(
        resource: string,
        action: string,
        params: {
            pageSize: number,
            pageNum: number,
            ordering?: any,
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        count: number,
        pageCount: number,
        itemsInCurrentPage: ItemT[]
    } | undefined>;

    getAll<ItemT>(
        resource: string,
        action: string,
        params: {
            ordering?: any,
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<ItemT[] | undefined>;

    getOne<RecordT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any
            }
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
            id: number,
            data: {
                [key: string]: any
            }
        }
    ): Promise<void>;
}

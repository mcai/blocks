import {SimpleDataProvider} from "./SimpleDataProvider";

export class SimpleMongoDbDataProvider implements SimpleDataProvider {
    get<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any
        }
    ): Promise<ResultT | undefined> {
        return Promise.resolve(undefined);
    }

    post<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any
        }
    ): Promise<ResultT | undefined> {
        return Promise.resolve(undefined);
    }

    getList<ItemT>(
        resource: string,
        action: string,
        params: {
            pageSize: number;
            pageNum: number;
            ordering?: any;
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        count: number;
        pageCount: number;
        itemsInCurrentPage: ItemT[]
    } | undefined> {
        return Promise.resolve(undefined);
    }

    getAll<ItemT>(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<ItemT[] | undefined> {
        return Promise.resolve(undefined);
    }

    getOne<RecordT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    add<RecordT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    update<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    remove<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any
            }
        }
    ): Promise<void> {
        return Promise.resolve(undefined);
    }
}

import {SimpleDataProvider} from "./SimpleDataProvider";
import {SimpleHttpClient} from "./SimpleHttpClient";
import {SimpleHttpClientMethod} from "./SimpleHttpClientMethod";

export class SimpleRestDataProvider implements SimpleDataProvider {
    private readonly url: string

    constructor(url: string) {
        this.url = url;
    }

    private async call<ResultT>(
        resource: string,
        action: string,
        method: SimpleHttpClientMethod,
        params: { [key: string]: any }
    ): Promise<ResultT | undefined> {
        return await SimpleHttpClient.call<ResultT | undefined>(
            this.url + resource + action,
            method,
            params
        );
    }

    async get<ResultT>(
        resource: string,
        action: string,
        params: { [key: string]: any }
    ): Promise<ResultT | undefined> {
        return await this.call<ResultT | undefined>(
            resource,
            action,
            SimpleHttpClientMethod.get,
            params
        );
    }

    async post<ResultT>(
        resource: string,
        action: string,
        params: { [key: string]: any }
    ): Promise<ResultT | undefined> {
        return await this.call<ResultT | undefined>(
            resource,
            action,
            SimpleHttpClientMethod.post,
            params
        );
    }

    async getList<ItemT>(
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
    } | undefined> {
        return await SimpleHttpClient.call<{
            count: number,
            pageCount: number,
            itemsInCurrentPage: ItemT[]
        }>(
            this.url + resource + action,
            SimpleHttpClientMethod.get,
            {
                pageSize: params.pageSize,
                pageNum: params.pageNum,
                ordering: params.ordering,
                ...params.filter
            }
        );
    }

    async getAll<ItemT>(
        resource: string,
        action: string,
        params: {
            ordering?: any,
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<ItemT[] | undefined> {
        return await SimpleHttpClient.call<ItemT[]>(
            this.url + resource + action,
            SimpleHttpClientMethod.get,
            {
                ordering: params.ordering,
                ...params.filter
            }
        );
    }

    async getOne<ItemT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<ItemT | undefined>{
        return await SimpleHttpClient.call<ItemT>(
            this.url + resource + action,
            SimpleHttpClientMethod.get,
            {
                ...params.filter
            }
        );
    }

    async add<ItemT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any
            }
        }
    ): Promise<ItemT | undefined>{
        return await SimpleHttpClient.call<ItemT>(
            this.url + resource + action,
            SimpleHttpClientMethod.post,
            {
                ...params.data
            }
        );
    }

    async update<ItemT>(
        resource: string,
        action: string,
        params: {
            id: number,
            data: {
                [key: string]: any
            }
        }
    ): Promise<ItemT | undefined>{
        return await SimpleHttpClient.call<ItemT>(
            this.url + resource + action,
            SimpleHttpClientMethod.post,
            {
                id: params.id,
                ...params.data
            }
        );
    }

    async remove<ItemT>(
        resource: string,
        action: string,
        params: {
            id: number,
            data: {
                [key: string]: any
            }
        }
    ): Promise<void>{
        return await SimpleHttpClient.call<void>(
            this.url + resource + action,
            SimpleHttpClientMethod.post,
            {
                id: params.id,
                ...params.data
            }
        );
    }
}

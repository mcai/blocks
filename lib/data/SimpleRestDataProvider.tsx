import {SimpleDataProvider} from "./SimpleDataProvider";
import {SimpleHttpClient} from "./SimpleHttpClient";
import {SimpleHttpClientMethod} from "./SimpleHttpClientMethod";

export class SimpleRestDataProvider implements SimpleDataProvider {
    url: string

    constructor(url: string) {
        this.url = url;
    }

    async getList<ItemT>(
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
    } | undefined> {
        return await SimpleHttpClient.call<{
            count: number,
            pageCount: number,
            itemsInCurrentPage: ItemT[]
        }>(
            this.url + "/" + resource + "/" + action,
            SimpleHttpClientMethod.get,
            {
                pageSize: params.pageSize,
                pageNum: params.pageNum,
                ordering: params.ordering,
                ...params.filter
            }
        );
    }

    async getById<ItemT>(
        resource: string,
        action: string,
        params: {
            id: number
        }
    ): Promise<ItemT | undefined>{
        return await SimpleHttpClient.call<ItemT>(
            this.url + "/" + resource + "/" + action,
            SimpleHttpClientMethod.get,
            {
                id: params.id
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
            this.url + "/" + resource + "/" + action,
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
            this.url + "/" + resource + "/" + action,
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
            id: number
        }
    ): Promise<void>{
        return await SimpleHttpClient.call<void>(
            this.url + "/" + resource + "/" + action,
            SimpleHttpClientMethod.post,
            {
                id: params.id
            }
        );
    }
}

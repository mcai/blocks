import { SimpleDataProvider } from "./SimpleDataProvider";
import { SimpleHttpClient } from "./SimpleHttpClient";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";

export class SimpleRestDataProvider implements SimpleDataProvider {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async call<ResultT>(
        resource: string,
        action: string,
        method: SimpleHttpClientMethod,
        params: {
            [key: string]: any;
        },
    ): Promise<ResultT | undefined> {
        return await SimpleHttpClient.call<ResultT | undefined>(this.baseUrl + resource + action, method, params);
    }

    async get<ResultT>(resource: string, action: string, params: { [key: string]: any }): Promise<ResultT | undefined> {
        return await this.call<ResultT | undefined>(resource, action, SimpleHttpClientMethod.get, params);
    }

    async post<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any;
        },
    ): Promise<ResultT | undefined> {
        return await this.call<ResultT | undefined>(resource, action, SimpleHttpClientMethod.post, params);
    }

    async find<ItemT>(
        resource: string,
        action: string,
        params: {
            pageSize: number;
            pageNum: number;
            ordering?: any;
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<
        | {
              count: number;
              pageCount: number;
              itemsInCurrentPage: ItemT[];
          }
        | undefined
    > {
        return await SimpleHttpClient.call<{
            count: number;
            pageCount: number;
            itemsInCurrentPage: ItemT[];
        }>(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            pageSize: params.pageSize,
            pageNum: params.pageNum,
            ordering: params.ordering,
            ...params.filter,
        });
    }

    async all<ItemT>(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT[] | undefined> {
        return await SimpleHttpClient.call<ItemT[]>(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            ordering: params.ordering,
            ...params.filter,
        });
    }

    async count<ItemT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<number | undefined> {
        return await SimpleHttpClient.call<number>(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            ...params.filter,
        });
    }

    async one<ItemT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined> {
        return await SimpleHttpClient.call<ItemT>(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            ...params.filter,
        });
    }

    async create<ItemT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined> {
        return await SimpleHttpClient.call<ItemT>(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            ...params.data,
        });
    }

    async update<ItemT>(
        resource: string,
        action: string,
        params: {
            id: any;
            data: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined> {
        return await SimpleHttpClient.call<ItemT>(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            id: params.id,
            ...params.data,
        });
    }

    async remove(
        resource: string,
        action: string,
        params: {
            id: any;
            data: {
                [key: string]: any;
            };
        },
    ): Promise<void> {
        return await SimpleHttpClient.call<void>(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            id: params.id,
            ...params.data,
        });
    }
}

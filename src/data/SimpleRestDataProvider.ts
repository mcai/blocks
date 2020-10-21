import { SimpleDataProvider } from "./SimpleDataProvider";
import { SimpleHttpClient } from "./SimpleHttpClient";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";

export class SimpleRestDataProvider implements SimpleDataProvider {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async call(
        resource: string,
        action: string,
        method: SimpleHttpClientMethod,
        params: any,
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, method, params);
    }

    async get(resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(resource, action, SimpleHttpClientMethod.get, params);
    }

    async post(resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(resource, action, SimpleHttpClientMethod.post, params);
    }

    async find(
        resource: string,
        action: string,
        params: {
            pageSize: number;
            pageNum: number;
            ordering?: any;
            filter?: any;
        },
    ): Promise<
        | {
              count: number;
              pageCount: number;
              itemsInCurrentPage: any[];
          }
        | undefined
    > {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            pageSize: params.pageSize,
            pageNum: params.pageNum,
            ordering: params.ordering,
            filter: params.filter,
        });
    }

    async all(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            ordering: params.ordering,
            filter: params.filter,
        });
    }

    async count(
        resource: string,
        action: string,
        params: {
            filter?: any;
        },
    ): Promise<number | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            filter: params.filter,
        });
    }

    async one(
        resource: string,
        action: string,
        params: {
            filter?: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, {
            filter: params.filter,
        });
    }

    async create(
        resource: string,
        action: string,
        params: {
            data: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            data: params.data,
        });
    }

    async update(
        resource: string,
        action: string,
        params: {
            filter: any;
            data: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            filter: params.filter,
            data: params.data,
        });
    }

    async remove(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<void> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, {
            filter: params.filter,
        });
    }
}

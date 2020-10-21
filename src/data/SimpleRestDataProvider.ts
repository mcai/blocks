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
            [name: string]: any;
        },
    ): Promise<
        | {
              count: number;
              pageCount: number;
              itemsInCurrentPage: any[];
          }
        | undefined
    > {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async all(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: any;
            [name: string]: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async count(
        resource: string,
        action: string,
        params: {
            filter?: any;
            [name: string]: any;
        },
    ): Promise<number | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async one(
        resource: string,
        action: string,
        params: {
            filter?: any;
            [name: string]: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async create(
        resource: string,
        action: string,
        params: {
            data?: any;
            [name: string]: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }

    async update(
        resource: string,
        action: string,
        params: {
            filter?: any;
            data?: any;
            [name: string]: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }

    async remove(
        resource: string,
        action: string,
        params: {
            filter?: any;
            [name: string]: any;
        },
    ): Promise<void> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }
}

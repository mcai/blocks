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

    async getList(
        resource: string,
        action: string,
        params: {
            paging: {
                pageSize: number;
                pageNum: number;
            };
            ordering: {
                key: string;
                descending: boolean;
            };
            filter: any;
        },
    ): Promise<{
        data: any[];
        total: number;
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async getAll(
        resource: string,
        action: string,
        params: {
            ordering: {
                key: string;
                descending: boolean;
            };
            filter: any;
        },
    ): Promise<{
        data: any[];
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async count(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: number;
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async getOne(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: any;
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async getMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
        },
    ): Promise<{
        data: any[];
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    async create(
        resource: string,
        action: string,
        params: {
            data: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }

    async update(
        resource: string,
        action: string,
        params: {
            filter: any;
            data: any;
        },
    ): Promise<{
        data: any;
    }> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }

    async delete(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<void> {
        return await SimpleHttpClient.call(this.baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }
}

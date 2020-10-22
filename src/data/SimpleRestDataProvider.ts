import { SimpleDataProvider } from "./SimpleDataProvider";
import { SimpleHttpClient } from "./SimpleHttpClient";

export class SimpleRestDataProvider implements SimpleDataProvider {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
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
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
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
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
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
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
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
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
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
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
    }

    async create(
        resource: string,
        action: string,
        params: {
            data: any;
        },
    ): Promise<any | undefined> {
        return await SimpleHttpClient.post(this.baseUrl, resource, action, params);
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
        return await SimpleHttpClient.post(this.baseUrl, resource, action, params);
    }

    async delete(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<void> {
        return await SimpleHttpClient.post(this.baseUrl, resource, action, params);
    }
}

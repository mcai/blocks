import { SimpleHttpClient } from "./SimpleHttpClient";
import { AbstractRestDataProvider } from "./AbstractRestDataProvider";

export class SimpleFlatRestDataProvider extends AbstractRestDataProvider {
    constructor(baseUrl: string) {
        super(baseUrl);
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
            transform?: {
                jsonata: string; // TODO: ignored
            };
        },
    ): Promise<{
        data: any[];
        total: number;
    }> {
        const params1 = {
            ...params.paging,
            ordering: params.ordering.key, // TODO: params.ordering.descending is ignored
            ...params.filter,
        };

        const result = await SimpleHttpClient.get(this.baseUrl, resource, action, params1);

        return {
            data: result.itemsInCurrentPage,
            total: result.count,
        };
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
            transform?: {
                jsonata: string; // TODO: ignored
            };
        },
    ): Promise<{
        data: any[];
    }> {
        const params1 = {
            ordering: params.ordering.key,
            ...params.filter,
        };

        const result = await SimpleHttpClient.get(this.baseUrl, resource, action, params1);

        return {
            data: result,
        };
    }

    async getOne(
        resource: string,
        action: string,
        params: {
            filter: any;
            transform?: {
                jsonata: string; // TODO: ignored
            };
        },
    ): Promise<{
        data: any;
    }> {
        const params1 = {
            ...params.filter,
        };

        const result = await SimpleHttpClient.get(this.baseUrl, resource, action, params1);

        return {
            data: result,
        };
    }

    async getMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
            transform?: {
                jsonata: string; // TODO: ignored
            };
        },
    ): Promise<{
        data: any[];
    }> {
        throw new Error("Not supported");
    }

    async countOne(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: number;
    }> {
        throw new Error("Not supported");
    }

    countMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
        },
    ): Promise<{ data: number[] }> {
        throw new Error("Not supported");
    }

    async create(
        resource: string,
        action: string,
        params: {
            data: any;
        },
    ): Promise<any | undefined> {
        const params1 = {
            ...params.data,
        };

        const result = await SimpleHttpClient.post(this.baseUrl, resource, action, params1);

        return {
            data: result,
        };
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
        const params1 = {
            ...params.filter,
            ...params.data,
        };

        const result = await SimpleHttpClient.post(this.baseUrl, resource, action, params1);

        return {
            data: result,
        };
    }

    async delete(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<void> {
        const params1 = {
            ...params.filter,
        };

        return await SimpleHttpClient.post(this.baseUrl, resource, action, params1);
    }
}

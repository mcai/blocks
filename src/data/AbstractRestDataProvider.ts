import { SimpleDataProvider } from "./SimpleDataProvider";
import { SimpleHttpClient } from "./SimpleHttpClient";

export abstract class AbstractRestDataProvider implements SimpleDataProvider {
    protected readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get(resource: string, action: string, params: any): Promise<any | undefined> {
        return await SimpleHttpClient.get(this.baseUrl, resource, action, params);
    }

    async post(resource: string, action: string, params: any): Promise<any | undefined> {
        return await SimpleHttpClient.post(this.baseUrl, resource, action, params);
    }

    abstract getList(
        resource: string,
        action: string,
        params: {
            paging: { pageSize: number; pageNum: number };
            ordering: { key: string; descending: boolean };
            filter: any;
        },
    ): Promise<{ data: any[]; total: number }>;

    abstract getAll(
        resource: string,
        action: string,
        params: { ordering: { key: string; descending: boolean }; filter: any },
    ): Promise<{ data: any[] }>;

    abstract getOne(resource: string, action: string, params: { filter: any }): Promise<{ data: any }>;

    abstract getMany(resource: string, action: string, params: { filters: any[] }): Promise<{ data: any[] }>;

    abstract countOne(resource: string, action: string, params: { filter: any }): Promise<{ data: number }>;

    abstract countMany(resource: string, action: string, params: { filters: any[] }): Promise<{ data: number[] }>;

    abstract create(resource: string, action: string, params: { data: any }): Promise<{ data: any }>;

    abstract update(resource: string, action: string, params: { filter: any; data: any }): Promise<{ data: any }>;

    abstract delete(resource: string, action: string, params: { filter: any }): Promise<void>;
}

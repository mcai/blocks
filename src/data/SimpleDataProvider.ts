export interface SimpleDataProvider {
    get(resource: string, action: string, params: any): Promise<any | undefined>;

    post(resource: string, action: string, params: any): Promise<any | undefined>;

    getList(
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
                jsonPath: string;
            };
        },
    ): Promise<{
        data: any[];
        total: number;
    }>;

    getAll(
        resource: string,
        action: string,
        params: {
            ordering: {
                key: string;
                descending: boolean;
            };
            filter: any;
            transform?: {
                jsonPath: string;
            };
        },
    ): Promise<{
        data: any[];
    }>;

    getOne(
        resource: string,
        action: string,
        params: {
            filter: any;
            transform?: {
                jsonPath: string;
            };
        },
    ): Promise<{
        data: any;
    }>;

    getMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
            transform?: {
                jsonPath: string;
            };
        },
    ): Promise<{
        data: any[];
    }>;

    countOne(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: number;
    }>;

    countMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
        },
    ): Promise<{
        data: number[];
    }>;

    create(
        resource: string,
        action: string,
        params: {
            data: any;
        },
    ): Promise<{
        data: any;
    }>;

    update(
        resource: string,
        action: string,
        params: {
            filter: any;
            data: any;
        },
    ): Promise<{
        data: any;
    }>;

    delete(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<void>;
}

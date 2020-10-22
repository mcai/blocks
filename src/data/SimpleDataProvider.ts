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
        },
    ): Promise<{
        data: any[];
    }>;

    count(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: number;
    }>;

    getOne(
        resource: string,
        action: string,
        params: {
            filter: any;
        },
    ): Promise<{
        data: any;
    }>;

    getMany(
        resource: string,
        action: string,
        params: {
            filters: any[];
        },
    ): Promise<{
        data: any[];
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

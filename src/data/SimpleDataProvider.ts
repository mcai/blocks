export interface SimpleDataProvider {
    get(resource: string, action: string, params: any): Promise<any | undefined>;

    post(resource: string, action: string, params: any): Promise<any | undefined>;

    find(
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
    >;

    all(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: any;
        },
    ): Promise<any[] | undefined>;

    count(
        resource: string,
        action: string,
        params: {
            filter?: any;
        },
    ): Promise<number | undefined>;

    one(
        resource: string,
        action: string,
        params: {
            filter?: any;
        },
    ): Promise<any | undefined>;

    create(
        resource: string,
        action: string,
        params: {
            data?: any;
        },
    ): Promise<any | undefined>;

    update(
        resource: string,
        action: string,
        params: {
            filter?: any;
            data?: any;
        },
    ): Promise<any | undefined>;

    remove(
        resource: string,
        action: string,
        params: {
            filter?: any;
        },
    ): Promise<void>;
}

export interface SimpleDataProvider {
    get<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any;
        },
    ): Promise<ResultT | undefined>;

    post<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any;
        },
    ): Promise<ResultT | undefined>;

    find<
        ItemT extends {
            key: string;
            [name: string]: any;
        }
    >(
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
    >;

    all<
        ItemT extends {
            key: string;
            [name: string]: any;
        }
    >(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT[] | undefined>;

    one<ItemT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined>;

    create<ItemT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined>;

    update<ItemT>(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any;
            };
        },
    ): Promise<ItemT | undefined>;

    remove(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any;
            };
        },
    ): Promise<void>;
}

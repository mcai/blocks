export interface SimpleDataProvider {
    getList(
        resource: string,
        params: {
            pagination: {
                pageSize: number,
                pageNum: number
            },
            sort: {
                field: string,
                order: string
            },
            filter: {
                [key: string]: any
            }
        }
    ): Promise<{
        data: any[],
        count: number
    }>;

    getOne(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: any
    }>

    getMany(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: any[]
    }>

    getListByReference(
        resource: string,
        params: {
            reference: string,
            id: number,
            pagination: {
                pageSize: number,
                pageNum: number
            },
            sort: {
                field: string,
                order: string
            },
            filter: {
                [key: string]: any
            }
        }
    ): Promise<{
        data: any[],
        count: number
    }>;

    create(
        resource: string,
        params: {
            data: any
        }
    ): Promise<{
        data: any
    }>;

    update(
        resource: string,
        params: {
            id: number,
            data: any
        }
    ): Promise<{
        data: any
    }>;

    updateMany(
        resource: string,
        params: {
            ids: number[],
            data: any
        }
    ): Promise<{
        data: number[]
    }>;

    delete(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: any
    }>;

    deleteMany(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: number[]
    }>;
}

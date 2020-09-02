export interface SimpleDataProvider {
    getList<RecordT>(
        resource: string,
        params: {
            pagination: {
                pageSize: number,
                pageNum: number
            },
            sort?: {
                field: string,
                order: string
            },
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        data: RecordT[],
        count: number
    }>;

    getOne<RecordT>(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: RecordT
    }>

    getMany<RecordT>(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: RecordT[]
    }>

    getListByReference<RecordT>(
        resource: string,
        params: {
            reference: string,
            id: number,
            pagination: {
                pageSize: number,
                pageNum: number
            },
            sort?: {
                field: string,
                order: string
            },
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        data: RecordT[],
        count: number
    }>;

    create<RecordT>(
        resource: string,
        params: {
            data: any
        }
    ): Promise<{
        data: RecordT
    }>;

    update<RecordT>(
        resource: string,
        params: {
            id: number,
            data: any
        }
    ): Promise<{
        data: RecordT
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

    delete<RecordT>(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: RecordT
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

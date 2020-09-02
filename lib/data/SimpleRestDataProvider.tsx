import {SimpleDataProvider} from "./SimpleDataProvider";
import {HttpClientHelper} from "./HttpClientHelper";

export class SimpleRestDataProvider implements SimpleDataProvider {
    url: string

    constructor(url: string) {
        this.url = url;
    }

    async getList<RecordT>(
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
        data: RecordT[],
        count: number
    }> {
        return await HttpClientHelper.call<{
            data: RecordT[],
            count: number
        }>(
            this.url + "/" + resource + "/" + "getList",
            "get",
            params
        );
    }

    async getOne<RecordT>(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: RecordT
    }>{
        return await HttpClientHelper.call<{
            data: RecordT
        }>(
            this.url + "/" + resource + "/" + "getOne",
            "get",
            params
        );
    }

    async getMany<RecordT>(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: RecordT[]
    }>{
        return await HttpClientHelper.call<{
            data: RecordT[]
        }>(
            this.url + "/" + resource + "/" + "getMany",
            "get",
            params
        );
    }

    async getListByReference<RecordT>(
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
        data: RecordT[],
        count: number
    }>{
        return await HttpClientHelper.call<{
            data: RecordT[],
            count: number
        }>(
            this.url + "/" + resource + "/" + "getListByReference",
            "get",
            params
        );
    }

    async create<RecordT>(
        resource: string,
        params: {
            data: any
        }
    ): Promise<{
        data: RecordT
    }>{
        return await HttpClientHelper.call<{
            data: RecordT
        }>(
            this.url + "/" + resource + "/" + "create",
            "post",
            params
        );
    }

    async update<RecordT>(
        resource: string,
        params: {
            id: number,
            data: any
        }
    ): Promise<{
        data: RecordT
    }>{
        return await HttpClientHelper.call<{
            data: RecordT
        }>(
            this.url + "/" + resource + "/" + "update",
            "post",
            params
        );
    }

    async updateMany(
        resource: string,
        params: {
            ids: number[],
            data: any
        }
    ): Promise<{
        data: number[]
    }>{
        return await HttpClientHelper.call<{
            data: number[]
        }>(
            this.url + "/" + resource + "/" + "updateMany",
            "post",
            params
        );
    }

    async delete<RecordT>(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: RecordT
    }>{
        return await HttpClientHelper.call<{
            data: RecordT
        }>(
            this.url + "/" + resource + "/" + "delete",
            "post",
            params
        );
    }

    async deleteMany(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: number[]
    }>{
        return await HttpClientHelper.call<{
            data: number[]
        }>(
            this.url + "/" + resource + "/" + "deleteMany",
            "post",
            params
        );
    }
}

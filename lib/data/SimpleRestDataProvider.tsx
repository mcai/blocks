import {SimpleDataProvider} from "./SimpleDataProvider";
import {HttpClientHelper} from "./HttpClientHelper";

export class SimpleRestDataProvider implements SimpleDataProvider {
    url: string

    constructor(url: string) {
        this.url = url;
    }

    async getList(
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
    }> {
        return await HttpClientHelper.call<{
            data: any[],
            count: number
        }>(
            this.url + "/" + resource + "/" + "getList",
            "get",
            params
        );
    }

    async getOne(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: any
    }>{
        return await HttpClientHelper.call<{
            data: any
        }>(
            this.url + "/" + resource + "/" + "getOne",
            "get",
            params
        );
    }

    async getMany(
        resource: string,
        params: {
            ids: number[]
        }
    ): Promise<{
        data: any[]
    }>{
        return await HttpClientHelper.call<{
            data: any[]
        }>(
            this.url + "/" + resource + "/" + "getMany",
            "get",
            params
        );
    }

    async getListByReference(
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
    }>{
        return await HttpClientHelper.call<{
            data: any[],
            count: number
        }>(
            this.url + "/" + resource + "/" + "getListByReference",
            "get",
            params
        );
    }

    async create(
        resource: string,
        params: {
            data: any
        }
    ): Promise<{
        data: any
    }>{
        return await HttpClientHelper.call<{
            data: any
        }>(
            this.url + "/" + resource + "/" + "create",
            "post",
            params
        );
    }

    async update(
        resource: string,
        params: {
            id: number,
            data: any
        }
    ): Promise<{
        data: any
    }>{
        return await HttpClientHelper.call<{
            data: any
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

    async delete(
        resource: string,
        params: {
            id: number
        }
    ): Promise<{
        data: any
    }>{
        return await HttpClientHelper.call<{
            data: any
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

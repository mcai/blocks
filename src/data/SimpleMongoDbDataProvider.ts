import {SimpleDataProvider} from "./SimpleDataProvider";
import {connect, model, Schema} from "mongoose";

console.log("Hello world");

export interface SimpleMongoDbDataProviderProps {

}

export class SimpleMongoDbDataProvider implements SimpleDataProvider {
    constructor() {
        this.test().then(() => {
            // TODO
        });
    }

    private async test() {
        let connectionString = "mongodb://localhost:27017";
        let databaseName = "test";

        await connect(
            connectionString + "/" + databaseName,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        let Cat = model('Cat', new Schema({
            name: String
        }));

        let kitty = new Cat({
            name: 'Zildjian'
        });

        await kitty.save();

        console.log('meow');
    }

    get<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any
        }
    ): Promise<ResultT | undefined> {
        return Promise.resolve(undefined);
    }

    post<ResultT>(
        resource: string,
        action: string,
        params: {
            [key: string]: any
        }
    ): Promise<ResultT | undefined> {
        return Promise.resolve(undefined);
    }

    getList<ItemT>(
        resource: string,
        action: string,
        params: {
            pageSize: number;
            pageNum: number;
            ordering?: any;
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<{
        count: number;
        pageCount: number;
        itemsInCurrentPage: ItemT[]
    } | undefined> {
        return Promise.resolve(undefined);
    }

    getAll<ItemT>(
        resource: string,
        action: string,
        params: {
            ordering?: any;
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<ItemT[] | undefined> {
        return Promise.resolve(undefined);
    }

    getOne<RecordT>(
        resource: string,
        action: string,
        params: {
            filter?: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    add<RecordT>(
        resource: string,
        action: string,
        params: {
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    update<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any
            }
        }
    ): Promise<RecordT | undefined> {
        return Promise.resolve(undefined);
    }

    remove<RecordT>(
        resource: string,
        action: string,
        params: {
            id: number;
            data: {
                [key: string]: any
            }
        }
    ): Promise<void> {
        return Promise.resolve(undefined);
    }
}

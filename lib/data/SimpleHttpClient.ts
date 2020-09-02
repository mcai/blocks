import request from "superagent";
import {SimpleHttpClientMethod} from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call<ResultT>(
        url: string,
        method: SimpleHttpClientMethod,
        params: { [name: string]: any }
    ): Promise<ResultT> {
        let res: request.Response;

        switch (method) {
            case SimpleHttpClientMethod.get:
                res = await request
                    .get(url)
                    .query(params);
                break;
            case SimpleHttpClientMethod.post:
                res = await request
                    .post(url)
                    .type('form')
                    .send(params);
                break;
            default:
                throw new Error(`${method}`);
        }

        return res.body;
    }
}

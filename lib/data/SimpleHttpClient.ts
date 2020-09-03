import request from "superagent";
import {SimpleHttpClientMethod} from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call<ResultT>(
        url: string,
        method: SimpleHttpClientMethod,
        params: { [name: string]: any }
    ): Promise<ResultT | undefined> {
        try {
            console.log(`[SimpleHttpClient] call, url=${url},method=${method == SimpleHttpClientMethod.get ? "get" : "post"},params=${JSON.stringify(params)}`);

            let res = method === SimpleHttpClientMethod.post
                ? await request
                    .post(url)
                    .type('form')
                    .send(params)
                : await request
                    .get(url)
                    .query(params);

            return res.body;
        } catch (e) {
            console.log(e.stackTrace);

            return undefined;
        }
    }
}

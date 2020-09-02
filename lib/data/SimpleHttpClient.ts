import request from "superagent";
import {SimpleHttpClientMethod} from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call<ResultT>(
        url: string,
        method: SimpleHttpClientMethod,
        params: { [name: string]: any }
    ): Promise<ResultT | undefined> {
        try {
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
            console.log(`[SimpleHttpClient] call, url=${url},method=${method},params=${params}`);
            console.log(e.stackTrace);

            return undefined;
        }
    }
}

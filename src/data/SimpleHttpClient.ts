import request from "superagent";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call<ResultT>(
        url: string,
        method: SimpleHttpClientMethod,
        params: {
            [name: string]: any;
        },
    ): Promise<ResultT | undefined> {
        try {
            const res =
                method === SimpleHttpClientMethod.post
                    ? await request.post(url).type("form").send(params)
                    : await request.get(url).query(params);

            const result = res.body;

            console.debug(
                `[SimpleHttpClient] call, url=${url},method=${
                    method == SimpleHttpClientMethod.get ? "get" : "post"
                },params=${JSON.stringify(params)},result=${JSON.stringify(result)}`,
            );

            return result;
        } catch (e) {
            console.error(
                `[SimpleHttpClient] call, url=${url},method=${
                    method == SimpleHttpClientMethod.get ? "get" : "post"
                },params=${JSON.stringify(params)}`,
            );
            console.error(e.stackTrace);

            return undefined;
        }
    }
}

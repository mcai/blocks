import request from "superagent";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call(
        url: string,
        method: SimpleHttpClientMethod,
        params: {
            [name: string]: any;
        },
    ): Promise<any | undefined> {
        return (method === SimpleHttpClientMethod.post
            ? await request.post(url).type("form").send(params)
            : await request.get(url).query(params)
        ).body;
    }
}

import request from "superagent";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";

export class SimpleHttpClient {
    static async call(url: string, method: SimpleHttpClientMethod, params: any): Promise<any | undefined> {
        return (method === SimpleHttpClientMethod.post
            ? await request.post(url).type("form").send(params)
            : await request.get(url).query(params)
        ).body;
    }

    static async get(baseUrl: string, resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(baseUrl + resource + action, SimpleHttpClientMethod.get, params);
    }

    static async post(baseUrl: string, resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(baseUrl + resource + action, SimpleHttpClientMethod.post, params);
    }
}

import request from "superagent";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";
import { stringifyUrl } from "query-string";
import urljoin from "url-join";

export class SimpleHttpClient {
    static async call(url: string, method: SimpleHttpClientMethod, params: any): Promise<any | undefined> {
        return (method === SimpleHttpClientMethod.post
            ? await request.post(url).type("form").send(params)
            : await request.get(url).query(params)
        ).body;
    }

    static async get(baseUrl: string, resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(urljoin(baseUrl, resource, action), SimpleHttpClientMethod.get, params);
    }

    static async post(baseUrl: string, resource: string, action: string, params: any): Promise<any | undefined> {
        return await this.call(urljoin(baseUrl, resource, action), SimpleHttpClientMethod.post, params);
    }

    static buildUrl(baseUrl: string, resource: string, action: string, query: any): string {
        return stringifyUrl({ url: urljoin(baseUrl, resource, action), query: query });
    }
}

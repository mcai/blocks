import request from "superagent";
import { SimpleHttpClientMethod } from "./SimpleHttpClientMethod";
import { stringifyUrl } from "query-string";
import urljoin from "url-join";

export class SimpleHttpClient {
    static async call(
        url: string,
        method: SimpleHttpClientMethod,
        params: any,
        onProgress?: (loaded: number, percent?: number, total?: number) => void,
    ): Promise<any | undefined> {
        const response =
            method === SimpleHttpClientMethod.post
                ? await request
                      .post(url)
                      .type("form")
                      .send(params)
                      .on("progress", (event) => {
                          onProgress?.(event.loaded, event.percent, event.total);
                      })
                : await request
                      .get(url)
                      .query(params)
                      .on("progress", (event) => {
                          onProgress?.(event.loaded, event.percent, event.total);
                      });

        return response.body ?? response.text;
    }

    static async get(
        baseUrl: string,
        resource: string,
        action: string,
        params: any,
        onProgress?: (loaded: number, percent?: number, total?: number) => void,
    ): Promise<any | undefined> {
        return await this.call(urljoin(baseUrl, resource, action), SimpleHttpClientMethod.get, params, onProgress);
    }

    static async post(
        baseUrl: string,
        resource: string,
        action: string,
        params: any,
        onProgress?: (loaded: number, percent?: number, total?: number) => void,
    ): Promise<any | undefined> {
        return await this.call(urljoin(baseUrl, resource, action), SimpleHttpClientMethod.post, params, onProgress);
    }

    static buildUrl(baseUrl: string, resource: string, action: string, query: any): string {
        return stringifyUrl({ url: urljoin(baseUrl, resource, action), query: query });
    }
}

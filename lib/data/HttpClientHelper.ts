import request from "superagent";

export class HttpClientHelper {
    static async call<ResultT>(
        url: string,
        method: string,
        params: { [name: string]: any }
    ): Promise<ResultT> {
        let res: request.Response;

        switch (method) {
            case "get":
                res = await request
                    .get(url)
                    .query(params);
                break;
            case "post":
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

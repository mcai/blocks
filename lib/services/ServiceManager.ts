import request from "superagent";
import {ServiceMethod} from "./ServiceMethod";
import {Service} from "./Service";

export class ServiceManager {
    static async call<ResultT>(service: Service<ResultT>): Promise<ResultT> {
        let res: request.Response;

        switch (service.method) {
            case ServiceMethod.get:
                res = await request
                    .get(service.url)
                    .query(service.params);
                break;
            case ServiceMethod.post:
                res = await request
                    .post(service.url)
                    .type('form')
                    .send(service.params);
                break;
            default:
                throw new Error(`${service.method}`);
        }

        return res.body;
    }
}

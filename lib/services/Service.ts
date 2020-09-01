import {ServiceMethod} from "./ServiceMethod";

export interface Service<ResultT> {
    url: string
    method: ServiceMethod
    params: { [name: string]: any }
}

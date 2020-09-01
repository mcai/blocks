import {Paging} from "./Paging";

export interface PagedDataViewState<ItemT> {
    pageSize: number
    pageNum: number
    paging?: Paging<ItemT>
}

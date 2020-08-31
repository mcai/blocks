export interface PagerProps {
    pageCount: number
    pageNum: number
    count: number
    pageSize: number
    onClick: (pageNum: number) => void
}

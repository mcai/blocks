export interface PagerProps {
    pageSize: number
    pageNum: number
    count: number
    pageCount: number
    onClick: (pageNum: number) => void
}

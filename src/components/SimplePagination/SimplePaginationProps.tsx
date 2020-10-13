export interface SimplePaginationProps {
    pageSize: number;
    pageNum: number;
    count: number;
    pageCount: number;
    onClick: (pageNum: number) => void;
}

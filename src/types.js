/* @flow */
/* TablePagination */
export type TablePaginationProps = {
  title: ?string,
  subTitle: ?string,
  data: Object[],
  columns: string,
  headers: string[],
  arrayOption: ?string[],
  nextPageText: ?string,
  prePageText: ?string,
  paginationClassName: string,
  className: ?string,
  perPageItemCount: number,
  totalCount: number,
}

export type TablePaginationDefaultProps = {
  title: string,
  subTitle: string,
  arrayOption: string[],
  perPageItemCount: number,
  totalCount: number,
  className: string,
  nextPageText: string,
  prePageText: string,
  paginationClassName: string,
}

export type TablePaginationState = {
  activePage: number,
  pageCount: number,
}

/* Table */
export type TableProps = {
  title: ?string,
  subTitle: ?string,
  data: Object[],
  columns: string,
  headers: string[],
  arrayOption: ?string[],
  className: ?string,
}

export type TableDefaultProps = {
  title: string,
  subTitle: string,
  arrayOption: string[],
  className: string,
}

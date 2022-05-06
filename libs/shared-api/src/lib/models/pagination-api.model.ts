export class PaginationApi {
  pageSize?: number;
  pageNum?: number;
  since?: string;
  until?: string;
  orderBy?: string;
  innerFilters?: { [key: string]: string }[];
  cursor?: string;

  constructor(data: Partial<PaginationApi> = {}) {
    this.pageSize = data.pageSize;
    this.pageNum = data.pageNum;
    this.since = data.since;
    this.until = data.until;
    this.orderBy = data.orderBy;
    this.innerFilters = data.innerFilters ?? [];
    this.cursor = data.cursor ?? '';
  }
}

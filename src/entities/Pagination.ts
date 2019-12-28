import Cell from './Cells/Cell';

export interface PaginationOptions {
  total?: number,
  perPage?: number,
  currentPage?: number,
  totalPages?: number,
  firstPageUrl?: string,
  lastPageUrl?: string,
  nextPageUrl?: string,
  prevPageUrl?: string,
}

export default class Pagination {
  public total: number;
  public perPage: number;
  public currentPage: number;
  public totalPages: number;
  public firstPageUrl?: string;
  public lastPageUrl?: string;
  public nextPageUrl?: string;
  public prevPageUrl?: string;

  constructor (options: PaginationOptions) {
    this.total = options.total || 0;
    this.perPage = options.perPage || 0;
    this.currentPage = options.currentPage || 1;
    this.totalPages = options.totalPages || 1;

    this.firstPageUrl = options.firstPageUrl;
    this.lastPageUrl = options.lastPageUrl;
    this.nextPageUrl = options.nextPageUrl;
    this.prevPageUrl = options.prevPageUrl;
  }
}

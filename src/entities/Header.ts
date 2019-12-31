export interface HeaderOptions {
id: string;
label: string;
  searchable?: boolean;
  orderable?: boolean;
  align?: string;
  minWidth?: string
  orderDirection?: string,
}

export default class Header {
  public id: string;
  public align: string;
  public label: string;
  public searchable: boolean;
  public orderable: boolean;
  public minWidth: string;
  public orderDirection: string;

  constructor (options: HeaderOptions) {
    this.id = options.id || 'text';
    this.label = options.label || '';
    this.searchable = options.searchable !== false;
    this.orderable = options.orderable !== false;
    this.align = options.align || 'left';
    this.minWidth = options.minWidth || '0';
    this.orderDirection = options.orderDirection || 'asc';
  }

  public changeOrderDirection () {
    this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc';
  }
}

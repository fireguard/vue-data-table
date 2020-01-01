import { CellAlign } from './Cell';

export interface HeaderOptions {
id: string;
label: string;
  searchable?: boolean;
  orderable?: boolean;
  align?: string;
  minWidth?: string
  orderDirection?: string,
}

export const OrderDirection = {
  ASC: 'asc',
  DESC: 'desc',
};

export default class Header {
  public id: string;
  public align: string;
  public label: string;
  public searchable: boolean;
  public orderable: boolean;
  public minWidth: string;
  public orderDirection: string;

  constructor (options: HeaderOptions) {
    this.id = options.id;
    this.label = options.label || '';
    this.searchable = options.searchable !== false;
    this.orderable = options.orderable !== false;
    this.align = options.align || CellAlign.LEFT;
    this.minWidth = options.minWidth || '0';
    this.orderDirection = options.orderDirection || OrderDirection.ASC;
  }

  public changeOrderDirection () {
    this.orderDirection = this.orderDirection === OrderDirection.ASC ? OrderDirection.DESC : OrderDirection.ASC;
  }
}

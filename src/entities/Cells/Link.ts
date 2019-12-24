import Cell, { CellOptions } from './Cell';

export interface LinkOptions extends CellOptions {
  url?: string,
  target?: string,
  route?: string,
}

export default class Link extends Cell {
  public url: string;
  public target: string;
  public route?: string;

  constructor (options: LinkOptions) {
    super(options);
    this.type = 'link';
    this.url = options.url || '#';
    this.target = options.target || '_blank';
    this.route = options.route || undefined;
  }
}

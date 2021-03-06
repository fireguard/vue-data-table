import Cell, { CellOptions } from './Cell';

export interface ImageOptions extends CellOptions {
  url: string,
  height?: string | number,
  width?: string | number,
}

export default class Link extends Cell {
  public url: string;
  public height: string | number;
  public width: string | number;

  constructor (options: ImageOptions) {
    super(options);
    this.type = 'image';
    this.url = options.url;
    this.height = options.height || 42;
    this.width = options.width || 42;
  }
}

import Cell, { CellOptions } from './Cell';

export interface IconOptions extends CellOptions {
  class?: string,
  icon: string,
  size?: string,
  color?: string,
}

export default class Icon extends Cell {
  public class: string;
  public icon: string | number;
  public size: string;
  public color: string;

  constructor (options: IconOptions) {
    super(options);
    this.type = 'icon';
    this.class = options.class || 'fa';
    this.icon = options.icon;
    this.size = options.size || '1em';
    this.color = options.color || 'inherit';
  }
}

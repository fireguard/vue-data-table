import Cell, { CellOptions } from './Cell';

export interface SummaryOptions extends CellOptions {
  size: number,
  reversed: boolean,
}

export default class Summary extends Cell {
  public size: number;
  public reversed: boolean;

  constructor (options: SummaryOptions) {
    super(options);
    this.type = 'summary';
    this.size = options.size || 10;
    this.reversed = options.reversed || false;
  }
}

import Cell from './Cell';

export interface RowOptions {
  id: string | number,
  cells: Cell[],
}

export default class Row {
  public id: string | number;
  public cells: Cell[];

  constructor (options: RowOptions) {
    this.id = options.id;
    this.cells = options.cells || [];
  }
}

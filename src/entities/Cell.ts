export interface CellOptions {
  type?: string,
  label: string;
}

export default class Cell {
  public type: string;
  public label: string;
  constructor (options: CellOptions) {
    this.type = options.type || 'text';
    this.label = options.label || '';
  }
}

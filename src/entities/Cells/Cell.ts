export interface CellOptions {
  type?: string,
  label: string;
  align?: string;
  clickable?: boolean
}

export default class Cell {
  public type: string;
  public label: string;
  public align: string;
  public clickable: boolean;

  constructor (options: CellOptions) {
    this.type = options.type || 'text';
    this.label = options.label || '';
    this.align = options.align || 'left';
    this.clickable = options.clickable || false;
  }
}

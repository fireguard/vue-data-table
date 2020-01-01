export interface CellOptions {
  type?: string,
  label: string;
  align?: string;
  clickable?: boolean
}

export const CellAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};

export default class Cell {
  public type: string;
  public label: string;
  public align: string;
  public clickable: boolean;

  constructor (options: CellOptions) {
    this.type = options.type || 'text';
    this.label = options.label || '';
    this.align = options.align || CellAlign.LEFT;
    this.clickable = options.clickable || false;
  }
}

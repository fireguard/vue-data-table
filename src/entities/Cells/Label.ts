import Cell, { CellOptions, CellAlign } from './Cell';

export enum Color {
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Danger ='danger',
  Warn = 'warn',
}

export interface LabelOptions extends CellOptions {
  color?: Color,
}

export default class Label extends Cell {
  public color: Color;

  constructor (options: LabelOptions) {
    super(options);
    this.type = 'label';
    this.color = options.color || Color.Default;
    this.align = options.align || CellAlign.CENTER;
  }
}

import { BaseClass } from '../base/base.model';

export class DerivedYClass extends BaseClass {
  public y: number;

  constructor(a: number, b: number, y: number) {
    super(a, b);
    this.y = y;
  }
}

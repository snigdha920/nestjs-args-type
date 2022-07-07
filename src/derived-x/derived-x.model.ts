import { BaseClass } from '../base/base.model';

export class DerivedXClass extends BaseClass {
  public x: number;

  constructor(a: number, b: number, x: number) {
    super(a, b);
    this.x = x;
  }
}

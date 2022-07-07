import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseClass } from '../base/base.model';

@ObjectType()
export class DerivedXClass extends BaseClass {
  @Field(() => Int)
  public x: number;

  constructor(a: number, b: number, x: number) {
    super(a, b);
    this.x = x;
  }
}

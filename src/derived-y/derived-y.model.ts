import { Field, ObjectType } from '@nestjs/graphql';
import { BaseClass } from '../base/base.model';

@ObjectType()
export class DerivedYClass extends BaseClass {
  @Field()
  public y: string;

  constructor(a: number, b: number, y: string) {
    super(a, b);
    this.y = y;
  }
}

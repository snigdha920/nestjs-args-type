import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseClass {
  @Field(() => Int)
  public a: number;

  @Field(() => Int)
  public b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
}

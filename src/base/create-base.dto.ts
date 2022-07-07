import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber, Max, Min } from 'class-validator';

@ArgsType()
export class CreateBaseClassDto {
  @IsNumber()
  @Min(100)
  @Field(() => Int)
  public a: number;

  @IsNumber()
  @Max(100)
  @Field(() => Int)
  public b: number;
}

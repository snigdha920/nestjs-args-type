import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber, Min } from 'class-validator';
import { CreateBaseClassDto } from '../base/create-base.dto';

@ArgsType()
export class CreateDerivedXDto extends CreateBaseClassDto {
  @IsNumber()
  @Min(500)
  @Field(() => Int)
  public x: number;
}

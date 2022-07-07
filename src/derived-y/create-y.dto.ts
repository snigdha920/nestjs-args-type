import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';
import { CreateBaseClassDto } from '../base/create-base.dto';

@ArgsType()
export class CreateDerivedYDto extends CreateBaseClassDto {
  @IsString()
  @MaxLength(5)
  @Field(() => String)
  public y: string;
}

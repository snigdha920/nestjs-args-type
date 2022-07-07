import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from '../base/base.resolver';
import { CreateDerivedXDto } from './create-x.dto';
import { DerivedXClass } from './derived-x.model';

@Resolver((of) => DerivedXClass)
export class DerivedXResolver extends BaseResolver(
  DerivedXClass,
  CreateDerivedXDto,
) {
  constructor() {
    super();
  }
}

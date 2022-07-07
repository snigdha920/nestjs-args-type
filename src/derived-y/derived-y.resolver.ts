import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from '../base/base.resolver';
import { CreateDerivedYDto } from './create-y.dto';
import { DerivedYClass } from './derived-y.model';

@Resolver((of) => DerivedYClass)
export class DerivedYResolver extends BaseResolver(
  DerivedYClass,
  CreateDerivedYDto,
) {
  constructor() {
    super();
  }
}

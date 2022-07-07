import { Type } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @Mutation()
    async createMutation(@Args() args: any) {
      // Create
    }
  }
  return BaseResolverHost;
}

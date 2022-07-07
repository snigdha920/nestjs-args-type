import { Type } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseClass } from './base.model';
import { CreateBaseClassDto } from './create-base.dto';

export function BaseResolver<
  T extends Type<BaseClass>,
  createClassDto extends Type<CreateBaseClassDto>,
>(classRef: T, createClassArgsDtoRef: createClassDto): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @Query(() => String)
    sayHello(): string {
      return 'Hello World!';
    }

    @Mutation(() => Boolean, { name: `create${classRef.name}` })
    async createMutation(
      @Args({ type: () => createClassArgsDtoRef })
      args: typeof createClassArgsDtoRef,
    ) {
      console.log('class is ', classRef.name);
      console.log('args captured are ', args);
      return true;
    }
  }
  return BaseResolverHost;
}

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DerivedXModule } from './derived-x/derived-x.module';
import { DerivedYModule } from './derived-y/derived-y.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver }),
    DerivedXModule,
    DerivedYModule,
  ],
})
export class AppModule {}

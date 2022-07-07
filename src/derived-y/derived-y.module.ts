import { Module } from '@nestjs/common';
import { DerivedYResolver } from './derived-y.resolver';

@Module({ providers: [DerivedYResolver] })
export class DerivedYModule {}

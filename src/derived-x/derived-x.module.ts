import { Module } from '@nestjs/common';
import { DerivedXResolver } from './derived-x.resolver';

@Module({
  providers: [DerivedXResolver],
})
export class DerivedXModule {}

import { Module } from '@nestjs/common';
import { CashController } from './cash.controller';

@Module({
  controllers: [CashController],
  providers: [],
})
export class SeriesModule {}

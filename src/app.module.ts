import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { SeriesModule } from './series/series.module';
import { CashController } from './cash/cash.controller';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PaymentModule, SeriesModule, CommonModule],
  controllers: [CashController],
  providers: [],
})
export class AppModule {}

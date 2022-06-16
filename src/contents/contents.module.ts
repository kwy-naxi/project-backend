import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ContentsCart } from './entities/contents_cart.entity';
import { ContentsPriceItemManage } from './entities/contents_price_item_manage.entities';

@Module({
  imports: [TypeOrmModule.forFeature([ContentsPriceItemManage, ContentsCart])],
  controllers: [ContentsController],
  providers: [ContentsService],
})
export class ContentsModule {}

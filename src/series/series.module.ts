import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { Series } from './entities/series.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './entities/episode.entity';
import { Testtable } from './entities/testtable.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Series, Episode, Testtable]),
    TypeOrmModule.forFeature([Testtable], 'dbtest'),
  ],
  controllers: [SeriesController],
  providers: [SeriesService],
})
export class SeriesModule {}

import { Injectable } from '@nestjs/common';
import {
  InjectConnection,
  InjectEntityManager,
  InjectRepository,
} from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { SeriesInfoOutput, SeriesInfoInput } from './dto/series-info.dto';
import { Episode } from './entities/episode.entity';
import { Series } from './entities/series.entity';
import { Testtable } from './entities/testtable.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly series: Repository<Series>,
    @InjectRepository(Episode)
    private readonly episode: Repository<Episode>,
    @InjectRepository(Testtable, 'dbtest')
    private readonly testtable: Repository<Testtable>,
  ) {}

  async testDB({ id }: Testtable) {
    const testdb = await this.testtable.findOneBy({ id });
    console.log('------test-------');
    console.log(testdb);
  }

  async seriesEpisode({ id }: Series): Promise<SeriesInfoOutput> {
    //const series = await this.series.findOne;
    const seriesOne = await this.series.findOneBy({ id });
    if (!seriesOne) {
      console.log('seriesOne data not found');
    }
    const query = await this.episode.find();
    console.log(query);
    // const query = await this.episode.find({
    //   where: {
    //     series,
    //   },
    // });
    return {
      ok: true,
      //episode: query,
    };
  }
}

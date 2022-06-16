import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeriesInfoOutput } from './dto/series-info.dto';
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

  //Test Data
  async testDB({ id }: Testtable) {
    const testdb = await this.testtable.findOneBy({ id });
    console.log('------test-------');
    console.log(testdb);
  }
  async seriesPut({ name }: Series) {
    const query = await this.series.save(this.series.create({ name }));
    console.log(query);
  }
  async episodePut({ seriesId, name }: Episode) {
    const query = await this.episode.save(
      this.episode.create({ seriesId, name }),
    );
    console.log(query);
  }

  //--------------------------------------------------------------------

  /**
   * 레거시 DB에서 series 정보 조회
   */
  async seriesOne({ id }: Series): Promise<SeriesInfoOutput> {
    const seriesInfo = await this.series.findOneBy({ id });
    if (!seriesInfo) {
      console.log('seriesOne data not found');
    }
    const query = await this.episode.find({
      where: {
        seriesId: seriesInfo.id,
      },
    });
    console.log(query);
    return {
      ok: true,
    };
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { SeriesInfoOutput } from './dto/series-info.dto';
import { Episode } from './entities/episode.entity';
import { Series } from './entities/series.entity';
import { Testtable } from './entities/testtable.entity';
import { SeriesService } from './series.service';
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  /**
   * Test Data Create
   */
  @Post('/seriesput')
  seriesPut(@Body() series: Series) {
    return this.seriesService.seriesPut(series);
  }
  @Post('/episodeput')
  episodePut(@Body() episode: Episode) {
    return this.seriesService.episodePut(episode);
  }
  @Post('/test')
  testDB(@Body() testtable: Testtable) {
    return this.seriesService.testDB(testtable);
  }

  /**
   * comment 시리즈 정보 조회
   */
  @Post()
  seriesOne(@Body() series: Series): Promise<SeriesInfoOutput> {
    return this.seriesService.seriesOne(series);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { SeriesInfoInput, SeriesInfoOutput } from './dto/series-info.dto';
import { Series } from './entities/series.entity';
import { Testtable } from './entities/testtable.entity';
import { SeriesService } from './series.service';
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  /**
   * comment 시리즈 정보 조회
   */
  @Post()
  seriesOne(@Body() series: Series): Promise<SeriesInfoOutput> {
    return this.seriesService.seriesEpisode(series);
  }

  @Post('/test')
  testDB(@Body() testtable: Testtable) {
    console.log(testtable);
    return this.seriesService.testDB(testtable);
  }
}

import { Controller, Get, Body } from '@nestjs/common';
import { SeriesService } from './series.service';
import { UseCashSeriesDto } from './dto/usecashSeries.dto';
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  // 캐시 결제 - 보유 캐시가 있는지 확인
  @Get('/usecash')
  usecashVerify(@Body() usecashData: UseCashSeriesDto) {
    return this.seriesService.usecashVerify(usecashData);
  }
}

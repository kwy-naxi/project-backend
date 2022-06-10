import { Controller, Get, Body } from '@nestjs/common';
import { SeriesService } from './series.service';
import { UseCashSeriesDto } from './dto/usecashSeries.dto';
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}
}

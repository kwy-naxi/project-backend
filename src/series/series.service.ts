import { Injectable } from '@nestjs/common';
import { UseCashSeriesDto } from './dto/usecashSeries.dto';

@Injectable()
export class SeriesService {
  /**
   * 1. 유저 정보 확인
   * 2. 유저 지갑 정보 받아오기
   * 3. 받아온 유저 지갑을 통해 cash verify
   * 4. 애러 메세지
   *  */
  usecashVerify(usecashSeriesDto: UseCashSeriesDto) {
    return;
  }
}

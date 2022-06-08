import { Body, Controller, Get, Post } from '@nestjs/common';
import { CashService } from './cash.service';

@Controller('cash')
export class CashController {
  constructor(private readonly cashService: CashService) {}

  /**
   * 1. user 보유 캐시 (캐시 지갑 테이블 조회)
   * 2. 캐시 충전 제안상품 조회
   * 3. 월 자동 충전권
   */
  @Get('/topup')
  getTopup() {
    return;
  }

  /**
   * 1. 유저의 지갑인지 확인
   * 2. 제안상품과 입력상품 확인
   * 3. 결제 내역 테이블 등록(기본입력)
   * 4.
   */
  @Post('/topop')
  onCashHistoryCreate() {
    return;
  }
}

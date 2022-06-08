import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

// 1 tori cash 가격
export enum OneCashRole {
  toriCash = 200,
}

// package cash 수량
export enum PackageCashRole {
  _10toriCashNum = 10,
  _50toriCashNum = 50,
  _100toriCashNum = 100,
  _150toriCashNum = 150,
  _200toriCashNum = 200,
  _500toriCashNum = 500,
}

@Entity()
export class cash_wallet extends CoreEntity {
  @Column()
  user_idx: number;

  @Column()
  balance_topup: number;

  @Column()
  balance_subscription: number;

  @Column()
  balance_bonus: number;

  @Column()
  subscription_yn: boolean;

  @Column()
  admin_cs_note: string;
}

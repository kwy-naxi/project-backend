import { IsEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

export enum EUALA_AND_License {
  rental = 'Rental',
  keep = 'Keep',
  IPLicense = 'IPLicense',
  Ownership = 'OwnerShip',
}

@Entity()
export class ContentsSalesLedger extends CoreEntity {
  @Column()
  stori_idx: string;

  @Column()
  csl_rental_end_date: Date;

  @Column()
  csl_purchaser_idx: number;

  @Column()
  csl_sold_cash_price: number;

  @Column({ type: 'enum', enum: EUALA_AND_License })
  @IsEnum(EUALA_AND_License)
  csl_purchase_type: EUALA_AND_License;

  @Column()
  csl_external_seller_idx: number;

  @Column()
  csl_profit_share_holder: number;

  @Column({ type: 'varchar', length: 500 })
  csl_copyrightholder: string;
}

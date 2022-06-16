import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ContentsCart } from './contents_cart.entity';

@Entity()
export class ContentsPriceItemManage extends CoreEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  stori_idx: string;

  @Column({ type: 'varchar', length: 500, nullable: false })
  cpim_title: string;

  @Column({ default: false })
  cpim_use_yn: boolean;

  @Column({ type: 'int' })
  cpim_keep_price: number;

  @Column({ type: 'int' })
  cpim_rental_price: number;

  @Column({ type: 'int' })
  cpim_dc_keep_price: number;

  @Column({ type: 'int' })
  cpim_dc_rental_price: number;

  @Column({ type: 'int' })
  cpim_rental_period: number;

  @Column()
  cpim_sales_start_date: Date;

  @Column()
  cpim_sales_end_date: Date;

  @Column()
  cpim_wait_free_date: Date;

  @Column({ default: false })
  cpim_free_sale_yn: boolean;

  @OneToMany(
    (type) => ContentsCart,
    (contentsCart) => contentsCart.contentsPriceItemManage,
  )
  contentsCart: ContentsCart[];
}

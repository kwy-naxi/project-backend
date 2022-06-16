import { IsEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ContentsPriceItemManage } from './contents_price_item_manage.entities';

export enum Order_Status {
  pick = 'PICK',
  order_start = 'ORDER_START',
  order_done = 'ORDER_DONE',
  order_completed = 'COMPLETED',
}

@Entity()
export class ContentsCart extends CoreEntity {
  @Column()
  user_idx: number;

  @Column()
  stori_idx: string;

  @Column()
  cpim_idx: number;

  @ManyToOne(
    (type) => ContentsPriceItemManage,
    (contentsPriceItemManage) => contentsPriceItemManage.contentsCart,
  )
  @JoinColumn({ referencedColumnName: 'id', name: 'cpim_idx' })
  contentsPriceItemManage: ContentsPriceItemManage;

  @Column({ type: 'enum', enum: Order_Status })
  @IsEnum(Order_Status)
  order_status: Order_Status;
}

import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class cash_wallet extends CoreEntity {
  @Column()
  spend_type: string;

  @Column()
  cwh_category: string;

  @Column()
  cwh_at: number;

  @Column()
  cwh_summary: string;

  @Column()
  cw_idx: number;

  @Column()
  stori_idx2: number;
}

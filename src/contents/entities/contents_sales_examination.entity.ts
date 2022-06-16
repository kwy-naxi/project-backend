import { IsEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

export enum CSE_Status {
  requested = 'requested',
  reviewing = 'reviewing',
  modify_request = 'modify_request',
  rejected = 'rejected',
  approved = 'approved',
}

@Entity()
export class ContentsSalesExamination extends CoreEntity {
  @Column()
  stori_idx: string;

  @Column({ type: 'enum', enum: CSE_Status })
  @IsEnum(CSE_Status)
  cse_status: CSE_Status;

  @Column({ type: 'varchar', length: 500 })
  cse_summary: string;
}

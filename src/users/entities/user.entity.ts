import { IsEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

export enum UserStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

@Entity()
export class User extends CoreEntity {
  @Column()
  email: string;

  @Column({ type: 'enum', enum: UserStatus })
  @IsEnum(UserStatus)
  status: UserStatus;
}

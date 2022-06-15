import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Episode } from './episode.entity';

@Entity()
export class Series extends CoreEntity {
  @OneToMany((type) => Episode, (episode) => episode.series)
  episode: Episode[];

  @Column()
  name: string;
}

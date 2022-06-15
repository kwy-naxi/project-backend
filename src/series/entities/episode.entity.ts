import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Series } from './series.entity';

@Entity()
export class Episode extends CoreEntity {
  @ManyToOne((type) => Series, (series) => series.episode, { eager: true })
  series: Series;

  @Column()
  name: string;
}

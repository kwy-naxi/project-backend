import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Series } from './series.entity';

@Entity()
export class Episode extends CoreEntity {
  @Column()
  seriesId: number;

  @ManyToOne((type) => Series, (series) => series.episode)
  series: Series;

  @Column()
  name: string;
}

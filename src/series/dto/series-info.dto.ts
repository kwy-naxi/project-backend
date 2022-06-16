import { CoreOutput } from 'src/common/dto/output.dto';
import { Episode } from '../entities/episode.entity';

export class SeriesInfoInput {}

export class SeriesInfoOutput extends CoreOutput {
  episode?: Episode[];
}

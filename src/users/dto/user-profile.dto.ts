import { CoreOutput } from 'src/common/dto/output.dto';
import { User } from '../entities/user.entity';

export class UserProfileInput {
  userId: number;
}

export class UserProfileOutput extends CoreOutput {
  user?: User;
}

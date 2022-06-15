import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserProfileOutput } from './dto/user-profile.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    /**
     * TODO user 정보
     */
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 테스트용 유저 생성
   */
  async createUser({ email, status }: CreateUserDto): Promise<User> {
    const user = await this.users.save(this.users.create({ email, status }));
    return user;
  }

  /**
   * TODO user 인증 (외부 API)
   * 1. user 로그인 정보 확인
   * 2. 토큰 발행
   */
  userAuth(userNumber: number): string {
    try {
      const token = this.jwtService.sign(userNumber);
      return token;
    } catch (error) {}
  }

  async findById(id: number): Promise<UserProfileOutput> {
    try {
      const user = await this.users.findOneByOrFail({ id });
      if (!user) {
        throw Error();
      }
      return {
        ok: true,
        user,
      };
    } catch (error) {
      return { ok: false, error: 'User Not Found' };
    }
  }
}

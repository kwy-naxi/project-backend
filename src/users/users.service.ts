import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    /**
     * TODO user 정보
     */
    //@InjectRepository() private readonly users: Repository<>,
    private readonly jwtService: JwtService,
  ) {}

  userAuth(userNumber: number): string {
    try {
      /**
       * TODO user 인증 (외부 API)
       * 1. user 로그인 정보 확인
       * 2. 토큰 발행
       */
      const token = this.jwtService.sign(userNumber);
      return token;
    } catch (error) {}
  }
}

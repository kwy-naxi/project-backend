import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  userAuth(@Param('id') userNumber: number): string {
    return this.usersService.userAuth(userNumber);
  }

  @Get()
  userMe() {
    return 'Test userMe';
  }
}

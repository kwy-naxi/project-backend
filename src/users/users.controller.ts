import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.module';
import { CreateUserDto } from './dto/create-user.dto';
import { UserProfileInput, UserProfileOutput } from './dto/user-profile.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  userCreate(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  me(@AuthUser() authUser: User) {
    return authUser;
  }

  @Post('/profile')
  @UseGuards(AuthGuard)
  userProfile(
    @Body() userProfileInput: UserProfileInput,
  ): Promise<UserProfileOutput> {
    return this.usersService.findById(userProfileInput.userId);
  }

  @Post('/auth')
  userAuth(@Body('userId') userNumber: number): string {
    console.log(userNumber);
    return this.usersService.userAuth(userNumber);
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user = request['user'];
    if (!user) {
      return false;
    }
    return true;
  }
}

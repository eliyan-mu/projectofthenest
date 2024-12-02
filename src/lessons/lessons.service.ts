import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './lessons.controller';

@Injectable()
export class LessonsService {
  getAll(): string {
    throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  postlesson(obj: CreateUserDto) {}
}

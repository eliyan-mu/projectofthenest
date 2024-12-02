import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  AGE: Number;
}
@Controller('lessons')
export class LessonsController {
  //WE WANTT O THROW THE STATUS OF THE 500
  //ehere i write a INTERNAL_SERVER_ERROR => i can to wite anothe status
  constructor(private readonly lessonService: LessonsService) {}
  @Get()
  getAll() {
    return this.lessonService.getAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.lessonService.postlesson(body);
  }
}

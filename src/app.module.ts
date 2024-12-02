import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentModule } from './student/student.module';
import { MaterialsModule } from './materials/materials.module';
import { SchedulesModule } from './schedules/schedules.module';

import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [StudentModule, MaterialsModule, SchedulesModule, LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';
import { PrismaService } from 'src/PrismaService';

@Module({
  controllers: [NinjasController],
  providers: [NinjasService, PrismaService],
})
export class NinjasModule {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';
import { Ninja, Prisma } from '@prisma/client';
@Injectable()
export class NinjasService {
  constructor(private prisma: PrismaService) {}

  /**
   * To get all ninjas from the database
   * @author Htoo Maung Thait
   * @since 2023-06-08
   * @returns Ninja[]
   */
  async getAllNinjas(): Promise<Ninja[]> {
    return this.prisma.ninja.findMany();
  }
}

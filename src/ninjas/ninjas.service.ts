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

  async getNinjaById(id: number): Promise<Ninja> {
    return this.prisma.ninja.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createNinja(ninja: Prisma.NinjaCreateInput): Promise<Ninja> {
    return this.prisma.ninja.create({
      data: { ...ninja, since: new Date(ninja.since) },
    });
  }

  async updateNinja(
    id: number,
    ninja: Prisma.NinjaUpdateInput,
  ): Promise<Ninja> {
    return this.prisma.ninja.update({
      where: {
        id: id,
      },
      data: ninja,
    });
  }

  async deleteNinja(id: number): Promise<Ninja> {
    return this.prisma.ninja.delete({
      where: {
        id: id,
      },
    });
  }
}

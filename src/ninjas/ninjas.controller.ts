import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Res,
  Param,
  Body,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { NinjasService } from './ninjas.service';
import { Ninja } from '@prisma/client';

@Controller('ninjas')
export class NinjasController {
  private readonly logger = new Logger(NinjasController.name);
  constructor(private readonly ninjasService: NinjasService) {}

  /***
   * @author: Htoo Maung Thait
   * @since: 2023-06-07
   * @description: Get all ninjas
   */
  @Get('/getNinjas')
  async getNinjas(@Res() res: Response) {
    const ninjas = await this.ninjasService.getAllNinjas();
    res.status(HttpStatus.OK).json(ninjas);
  }

  /**
   * To get ninja by id
   * @Author Htoo Maung Thait
   * @since 2023-06-23
   * @param id
   * @param res
   */
  @Get('/getNinjaById/:id')
  async getNinjaById(@Param('id') id: number, @Res() res: Response) {
    this.logger.log('getNinjaById and id is ' + id);
    this.logger.debug('Id is number : ' + isNaN(id));
    const ninja = await this.ninjasService.getNinjaById(Number(id));
    res.status(HttpStatus.OK).json(ninja);
  }

  /**
   * To create ninja
   * @Author Htoo Maung Thait
   * @since 2023-06-23
   * @param ninja
   * @param res
   * @return Ninja
   */
  @Post('/createNinja')
  async createNinja(@Body() ninja: Ninja, @Res() res: Response) {
    this.logger.debug('createNinja and ninja is ' + JSON.stringify(ninja));
    const createdNinja = await this.ninjasService.createNinja(ninja);
    res.status(HttpStatus.OK).json(createdNinja);
  }

  /**
   * To update ninja by id
   * @Author Htoo Maung Thait
   * @Since 2023-06-23
   * @param id
   * @param ninja
   * @return Ninja
   */
  @Put('/updateNinja/:id')
  async updateNinja(
    @Param('id') id: number,
    @Body() ninja: Ninja,
    @Res() res: Response,
  ) {
    ninja.since = new Date(ninja.since);
    const updatedNinja = await this.ninjasService.updateNinja(
      Number(id),
      ninja,
    );
    res.status(HttpStatus.OK).json(updatedNinja);
  }

  /**
   * To delete ninja by id
   * @Author Htoo Maung Thait
   * @since 2023-06-23
   * @param id
   * @param res
   * @return Ninja
   */
  @Delete('/deleteNinja/:id')
  async deleteNinja(@Param('id') id: number, @Res() res: Response) {
    const deletedNinja = await this.ninjasService.deleteNinja(Number(id));
    res.status(HttpStatus.OK).json(deletedNinja);
  }
}

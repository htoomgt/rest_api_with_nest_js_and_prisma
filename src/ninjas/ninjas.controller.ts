import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
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
}

import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('ninjas')
export class NinjasController {
  @Get('/getNinjas')
  getNinjas(@Res() res: Response) {
    res.status(HttpStatus.OK).json([{ name: 'Ninja 1' }, { name: 'Ninja 2' }]);
  }
}

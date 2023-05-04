import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PessoasService } from './pessoas.service';

import { PessoasDTO } from './dto/pessoas.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post('cadastro')
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: PessoasDTO) {
    return this.pessoasService.create(data?.data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.pessoasService.findAll();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() data: PessoasDTO) {
    return this.pessoasService.update(id, data?.data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.pessoasService.delete(id);
  }
}

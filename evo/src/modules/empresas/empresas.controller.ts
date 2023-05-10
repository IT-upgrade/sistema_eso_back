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
import { EmpresasService } from './empresas.service';
import { EmpresasDTO } from './dto/empresas.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post('cadastro')
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: EmpresasDTO) {
    return this.empresasService.create(data.data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.empresasService.findAll();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() data: EmpresasDTO) {
    return this.empresasService.update(id, data.data);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') id: string) {
    return this.empresasService.getById(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.empresasService.delete(id);
  }
}

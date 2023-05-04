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
import { CargosService } from './cargos.service';
import { CargosDTO } from './dto/cargos.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post('cadastro')
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: CargosDTO) {
    return this.cargosService.create(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.cargosService.findAll();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() data: CargosDTO) {
    return this.cargosService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.cargosService.delete(id);
  }
}

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
import { ParecerTecnicoService } from './parecer-tecnico.service';
import { ParecerTecnicoDTO } from './dto/parecer-tecnico.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('parecer-tecnico')
export class ParecerTecnicoController {
  constructor(private readonly parecerTecnicoService: ParecerTecnicoService) {}

  @Post('cadastro')
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: ParecerTecnicoDTO) {
    return this.parecerTecnicoService.create(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.parecerTecnicoService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async get(@Param('id') id: string) {
    return this.parecerTecnicoService.delete(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() data: ParecerTecnicoDTO) {
    return this.parecerTecnicoService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.parecerTecnicoService.delete(id);
  }
}

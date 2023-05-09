import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParecerTecnicoDTO } from './dto/parecer-tecnico.dto';

@Injectable()
export class ParecerTecnicoService {
  constructor(private prisma: PrismaService) {}

  async create(data: ParecerTecnicoDTO) {
    const infoExists = await this.prisma.parecerTecnico.findFirst({
      where: {
        id: data.id,
      },
    });
    if (infoExists) {
      throw new Error('Parecer Técnico já cadastrado');
    }

    const ParecerTecnico = await this.prisma.parecerTecnico.create({
      data,
    });
    return ParecerTecnico;
  }

  async findAll() {
    return this.prisma.parecerTecnico.findMany();
  }

  async update(id: string, data: ParecerTecnicoDTO) {
    const parecerExists = await this.prisma.parecerTecnico.findUnique({
      where: {
        id,
      },
    });
    if (!parecerExists) {
      throw new Error('Parecer Tecnico não existe!');
    }

    await this.prisma.infoComplementar.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const infoExists = await this.prisma.infoComplementar.findUnique({
      where: {
        id,
      },
    });

    if (!infoExists) {
      throw new Error('Informação Complementar não existe.');
    }

    return await this.prisma.infoComplementar.delete({
      where: {
        id,
      },
    });
  }
}

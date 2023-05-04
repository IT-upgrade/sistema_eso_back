import { Injectable } from '@nestjs/common';
import { CargosDTO } from './dto/cargos.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CargosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CargosDTO) {
    const cargoExists = await this.prisma.cargos.findFirst({
      where: {
        id: data.id,
      },
    });
    if (cargoExists) {
      throw new Error('Cargo já cadastrado');
    }

    const cargos = await this.prisma.cargos.create({
      data,
    });
    return cargos;
  }

  async findAll() {
    return this.prisma.cargos.findMany();
  }

  async update(id: string, data: CargosDTO) {
    const cargoExists = await this.prisma.cargos.findUnique({
      where: {
        id,
      },
    });
    if (!cargoExists) {
      throw new Error('Cargo não existe!');
    }

    await this.prisma.cargos.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const cargoExists = await this.prisma.cargos.findUnique({
      where: {
        id,
      },
    });

    if (!cargoExists) {
      throw new Error('Cargo não existe.');
    }

    return await this.prisma.cargos.delete({
      where: {
        id,
      },
    });
  }
}

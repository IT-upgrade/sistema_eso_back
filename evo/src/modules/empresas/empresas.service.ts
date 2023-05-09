import { Injectable } from '@nestjs/common';
import { EmpresasDTO } from './dto/empresas.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaService) {}

  async create(data: EmpresasDTO) {
    const empresaExists = await this.prisma.empresas.findFirst({
      where: {
        numero_doc: data.numero_doc,
      },
    });
    if (empresaExists) {
      throw new Error('Documento já cadastrado');
    }
    const empresas = await this.prisma.empresas.create({
      data,
    });
    return empresas;
  }

  async findAll() {
    return this.prisma.empresas.findMany();
  }

  async update(id: string, data: EmpresasDTO) {
    const empresaExists = await this.prisma.empresas.findUnique({
      where: {
        id,
      },
    });
    if (!empresaExists) {
      throw new Error('Empresa não existe!');
    }

    await this.prisma.empresas.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const empresaExists = await this.prisma.empresas.findUnique({
      where: {
        id,
      },
    });

    if (!empresaExists) {
      throw new Error('Empresa não existe!');
    }

    return await this.prisma.empresas.delete({
      where: {
        id,
      },
    });
  }

  async getById(id: string) {
    const empresaExists = await this.prisma.empresas.findUnique({
      where: {
        id,
      },
    });

    if (!empresaExists) {
      throw new Error('Empresa não existe!');
    }

    return await this.prisma.empresas.findUnique({
      where: {
        id,
      },
    });
  }
}

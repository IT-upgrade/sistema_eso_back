import { PrismaService } from 'src/prisma/prisma.service';
import { PessoasDTO } from './dto/pessoas.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PessoasService {
  constructor(private prisma: PrismaService) {}

  async create(data: PessoasDTO) {
    const pessoaExist = await this.prisma.pessoas.findFirst({
      where: {
        numero_doc: data.numero_doc,
      },
    });
    if (pessoaExist) {
      throw new Error('Documento já cadastrado.');
    }

    const pessoas = await this.prisma.pessoas.create({
      data,
    });
    return pessoas;
  }

  async findAll() {
    return this.prisma.pessoas.findMany();
  }

  async update(id: string, data: PessoasDTO) {
    const pessoaExists = await this.prisma.pessoas.findUnique({
      where: {
        id,
      },
    });
    if (!pessoaExists) {
      throw new Error('Pessoa não existe!');
    }

    await this.prisma.pessoas.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const pessoaExists = await this.prisma.pessoas.findUnique({
      where: {
        id,
      },
    });

    if (!pessoaExists) {
      throw new Error('Pessoa não existe.');
    }

    return await this.prisma.pessoas.delete({
      where: {
        id,
      },
    });
  }
}

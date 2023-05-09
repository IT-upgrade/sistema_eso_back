import { Module } from '@nestjs/common';
import { ParecerTecnicoService } from './parecer-tecnico.service';
import { ParecerTecnicoController } from './parecer-tecnico.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ParecerTecnicoController],
  providers: [ParecerTecnicoService, PrismaService],
})
export class ParecerTecnicoModule {}

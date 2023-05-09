import { Module } from '@nestjs/common';
import { ParecerTecnicoService } from './parecer-tecnico.service';
import { ParecerTecnicoController } from './parecer-tecnico.controller';

@Module({
  controllers: [ParecerTecnicoController],
  providers: [ParecerTecnicoService],
})
export class ParecerTecnicoModule {}

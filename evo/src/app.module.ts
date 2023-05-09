import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { CargosModule } from './modules/cargos/cargos.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { ParecerTecnicoModule } from './modules/parecer-tecnico/parecer-tecnico.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    PessoasModule,
    EmpresasModule,
    CargosModule,
    AuthModule,
    ParecerTecnicoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

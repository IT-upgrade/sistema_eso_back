/* eslint-disable prettier/prettier */
import { DocRole } from '@prisma/client';

export type PessoasDTO = {
  data: PessoasDTO;
  
  id: string;
  nome: string;
  tipo_doc: DocRole | null;
  numero_doc: string;
  rg: string;
  rg_emissor: string;
  nascimento: string | null;
  genero: string;
  email: string;
  email_sec: string | null;
  tel: string;
  tel_sec: string | null;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string | null;
  cargoId: string;
  empresaId: string;
};

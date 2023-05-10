/* eslint-disable prettier/prettier */
import { DocRole } from "@prisma/client";

export type EmpresasDTO = {
  data: EmpresasDTO;
  id: string;
  rasao_social: string;
  nome_fantasia: string;
  tipo_doc: DocRole | null;
  numero_doc: string;
  data_registro: string;
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
  estabelecimento: string | null;
};

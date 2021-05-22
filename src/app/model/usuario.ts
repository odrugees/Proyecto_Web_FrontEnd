import { Categoria } from './categoria';

export class Usuario {
  usuarioId: number;
  usuario: string;
  usuarioActivo: boolean;
  usuarioConocimientos: string;
  usuarioContrasena: string;
  usuarioCorreo: string;
  usuarioFechaNacimiento: Date;
  usuarioInformacion: string;
  usuarioIntereses: string;
  usuarioNombre: string;
  usuarioCategorias: Categoria[];
}

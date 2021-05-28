import { Publicacion } from './publicacion';
import { Usuario } from './usuario';

export class Comentario {
  comentarioId: number;
  usuario: Usuario;
  publicacion: Publicacion;
  comentarioTexto: string;
  cometarioFecha: Date;
}

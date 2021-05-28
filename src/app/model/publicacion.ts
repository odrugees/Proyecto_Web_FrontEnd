import { Categoria } from './categoria';
import { Usuario } from './usuario';

export class Publicacion {
  publicacionId: number;
  usuario: Usuario;
  publicacionTexto: string;
  publicacionImagen: string;
  publicacionMeGusta: number;
  publicacionNoMeGusta: number;
  publicacionFecha: Date;
  categoria: Categoria;
}

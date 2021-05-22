import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Categoria } from '../model/categoria';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = '/api/usuario';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlEndPoint}/listar`);
  }

  retonarUsuario(usuarioId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/visualizar/${usuarioId}`)
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.urlEndPoint}/crear`, usuario, { headers: this.httpHeaders })
  }
  modificarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.urlEndPoint}/modificar/${usuario.usuarioId}`, usuario, { headers: this.httpHeaders })
  }

  eliminarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/eliminar/${usuario.usuarioId}`, { headers: this.httpHeaders })
  }

  listarCategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(`${this.urlEndPoint}/listar/categorias`);
    }
}

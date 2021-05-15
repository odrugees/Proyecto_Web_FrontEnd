import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = 'https://policonectados.herokuapp.com/api/usuario';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlEndPoint}/listar`).pipe(
      map(response => {
        let usuarios = response as Usuario[];
        return usuarios.map(usuario => {
          // usuario.usuarioActivo = usuario.usuarioActivo ? "Yes" : "No";
          // {{ usuario.usuarioActivo ? ('true' | 'Activo') : ('true' | 'InActivo') }
          return usuario;
        });
  }
      )
      );
}

retonarUsuario(usuarioId: number): Observable < Usuario > {
  return this.http.get<Usuario>(`${this.urlEndPoint}/visualizar/${usuarioId}`)
}

crearUsuario(usuario: Usuario): Observable < Usuario > {
  return this.http.post<Usuario>(`${this.urlEndPoint}/crear`, usuario, { headers: this.httpHeaders })
}
}

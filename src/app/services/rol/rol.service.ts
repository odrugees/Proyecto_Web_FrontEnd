import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../../model/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlEndPoint: string = 'https://policonectados.herokuapp.com/api/rol';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.urlEndPoint}/listar`);
  }

  crearRol(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${this.urlEndPoint}/crear`, rol, { headers: this.httpHeaders })
  }

  retonarRol(rolId: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.urlEndPoint}/visualizar/${rolId}`)
  }

  modificarRol(rol: Rol): Observable<Rol>{
    return this.http.put<Rol>(`${this.urlEndPoint}/modificar/${rol.rolId}`, rol, { headers: this.httpHeaders })
  }

  eliminarRol(rol: Rol): Observable<Rol> {
    return this.http.delete<Rol>(`${this.urlEndPoint}/eliminar/${rol.rolId}`,{ headers: this.httpHeaders })
  }
}

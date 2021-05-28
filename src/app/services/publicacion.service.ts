import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../model/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private urlEndPoint: string = '/api/publicacion';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  listarPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.urlEndPoint}/listar`);
  }
  retonarPublicacion(publicacionId: number): Observable<Publicacion> {
    return this.http.get<Publicacion>(`${this.urlEndPoint}/visualizar/${publicacionId}`)
  }
  crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(`${this.urlEndPoint}/crear`, publicacion, { headers: this.httpHeaders })
  }
  meGusta(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(`${this.urlEndPoint}/pubicacionMeGusta/${publicacion.publicacionId}`, publicacion, { headers: this.httpHeaders })
  }
  noMeGusta(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(`${this.urlEndPoint}/pubicacionNoMeGusta/${publicacion.publicacionId}`, publicacion, { headers: this.httpHeaders })
  }
}

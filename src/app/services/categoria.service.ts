import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = '/api/categoria';
 httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }


  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlEndPoint}/listar`);
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.urlEndPoint}/crear`, categoria, { headers: this.httpHeaders })
  }

  retonarCategoria(categoriaId: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlEndPoint}/visualizar/${categoriaId}`)
  }

  modificarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.urlEndPoint}/modificar/${categoria.categoriaId}`, categoria, { headers: this.httpHeaders })
  }

  eliminarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.urlEndPoint}/eliminar/${categoria.categoriaId}`,{ headers: this.httpHeaders })
  }
}

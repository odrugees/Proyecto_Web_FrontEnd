import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html'
})
export class FormularioCategoriaComponent implements OnInit {

  public categoria: Categoria = new Categoria()
  public titulo: string = "Categoria"
  public mode: string = "dsp"

  constructor(private categoriaService: CategoriaService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCategoria()
  }

  cargarCategoria(): void {
    this.activatedRoute.params.subscribe(params => {
      this.mode = params['mode']
      let id = params['id']
      if (this.mode != 'ins') {
        this.categoriaService.retonarCategoria(id).subscribe((categoria) => this.categoria = categoria)
      }
    })
  }

  public crear(): void {
    this.categoriaService.crearCategoria(this.categoria)
      .subscribe(categoria => {
        this.router.navigate(['/categorias'])
        Swal.fire('Nueva Categoria', `Categoria ${categoria.categoriaNombre} creada con éxito`, 'success')
      }
      )
  }

  public modificar(): void {
    this.categoriaService.modificarCategoria(this.categoria)
      .subscribe(categoria => {
        this.router.navigate(['/categorias'])
        Swal.fire('Categoria Actualizada', `Categoria ${categoria.categoriaNombre} actualizada con éxito`, 'success')
      }
      )
  }

  public eliminar(): void {
    Swal.fire({
      title: 'Está seguro?',
      text: "!No podrás revertir esta eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '!Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.eliminarCategoria(this.categoria)
          .subscribe(categoria => {
            this.router.navigate(['/categorias'])
            Swal.fire('Caregoria Eliminada', `Categoria ${categoria.categoriaNombre} eliminada con éxito`, 'success')
          }
          )
      }
    })
  }
  public cancelar(): void{
      this.router.navigate(['/categorias'])
  }
}

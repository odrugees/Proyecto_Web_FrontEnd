import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-publicacion',
  templateUrl: './formulario-publicacion.component.html'
})
export class FormularioPublicacionComponent implements OnInit {
  publicacion: Publicacion = new Publicacion()
  titulo: string = "Publicacion"
  mode: string = "dsp"
  constructor(private publicacionService: PublicacionService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPublicacion()
  }

  cargarPublicacion(): void {
    this.activatedRoute.params.subscribe(params => {
      this.mode = params['mode']
      let id = params['id']
      if (this.mode != 'ins') {
        this.publicacionService.retonarPublicacion(id).subscribe((publicacion) => this.publicacion = publicacion)
      }
    })
  }

  public crear(): void {
    this.publicacionService.crearPublicacion(this.publicacion)
      .subscribe(usuario => {
        this.router.navigate(['/publicaciones'])
        Swal.fire('Publicación creada con éxito', 'success')
      }
      )
  }

  // public modificar(): void {
  //   this.usuarioService.modificarUsuario(this.usuario)
  //     .subscribe(usuario => {
  //       this.router.navigate(['/usuarios'])
  //       Swal.fire('Usuario Actualizado', `Usuario ${usuario.usuarioNombre} actualizado con éxito`, 'success')
  //     }
  //     )
  // }

  // public eliminar(): void {
  //   Swal.fire({
  //     title: 'Está seguro?',
  //     text: "!No podrás revertir esta eliminación!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: '!Sí, bórralo!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.usuarioService.eliminarUsuario(this.usuario)
  //         .subscribe(usuario => {
  //           this.router.navigate(['/usuarios'])
  //           Swal.fire('Usuario Eliminado', `Usuario ${usuario.usuarioNombre} eliminado con éxito`, 'success')
  //         }
  //         )
  //     }
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario()
  categorias: Categoria[];
  titulo: string = "Usuario"
  mode: string = "dsp"

  constructor(private usuarioService: UsuarioService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario()
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      this.mode = params['mode']
      let id = params['id']
      if (this.mode != 'ins') {
        this.usuarioService.retonarUsuario(id).subscribe((usuario) => this.usuario = usuario)
      }
    })
    this.usuarioService.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }

  public crear(): void {
    console.log(this.usuario)
    this.usuarioService.crearUsuario(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire('Nuevo Usuario', `Usuario ${usuario.usuarioNombre} creado con éxito`, 'success')
      }
      )
  }

  public modificar(): void {
    this.usuarioService.modificarUsuario(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire('Usuario Actualizado', `Usuario ${usuario.usuarioNombre} actualizado con éxito`, 'success')
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
        this.usuarioService.eliminarUsuario(this.usuario)
          .subscribe(usuario => {
            this.router.navigate(['/usuarios'])
            Swal.fire('Usuario Eliminado', `Usuario ${usuario.usuarioNombre} eliminado con éxito`, 'success')
          }
          )
      }
    })
  }
  public cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

  compararCategoria = (c1: Categoria, c2: Categoria) => {
    if (Array.isArray(c2)) {
      return c2.indexOf(c1) !== -1;
    }
    return c1 && c2 ? c1.categoriaId === c2.categoriaId : c1 === c2;
  }
}

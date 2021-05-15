import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario()
  public titulo: string = "Usuario"
  public mode: string = "dsp"

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
  }

  public crear(): void {
    this.usuarioService.crearUsuario(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire('Nuevo Usuario', `Usuario ${usuario.usuarioNombre} creado con éxito`, 'success')
      }
      )
  }
  public cancelar(): void{
      this.router.navigate(['/usuarios'])
  }

}

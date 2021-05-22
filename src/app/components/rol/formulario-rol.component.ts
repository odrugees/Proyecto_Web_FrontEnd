import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/model/rol';
import { RolService } from 'src/app/services/rol.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html'
})
export class FormularioRolComponent implements OnInit {

  public rol: Rol = new Rol()
  public titulo: string = "Rol"
  public mode: string = "dsp"

  constructor(private rolService: RolService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarRol()
  }

  cargarRol(): void {
    this.activatedRoute.params.subscribe(params => {
      this.mode = params['mode']
      let id = params['id']
      if (this.mode != 'ins') {
        this.rolService.retonarRol(id).subscribe((rol) => this.rol = rol)
      }
    })
  }

  public crear(): void {
    this.rolService.crearRol(this.rol)
      .subscribe(rol => {
        this.router.navigate(['/roles'])
        Swal.fire('Nuevo Rol', `Rol ${rol.rolNombre} creado con éxito`, 'success')
      }
      )
  }

  public modificar(): void {
    this.rolService.modificarRol(this.rol)
      .subscribe(rol => {
        this.router.navigate(['/roles'])
        Swal.fire('Rol Actualizado', `Rol ${rol.rolNombre} actualizado con éxito`, 'success')
      }
      )
  }

  public eliminar(): void {
    Swal.fire({
      title: 'Está seguro?',
      text: "!No podrás revertir esta eliminacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '!Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rolService.eliminarRol(this.rol)
          .subscribe(rol => {
            this.router.navigate(['/roles'])
            Swal.fire('Rol Eliminado', `Rol ${rol.rolNombre} eliminado con éxito`, 'success')
          }
          )
      }
    })
  }

  public cancelar(): void{
      this.router.navigate(['/roles'])
  }
}

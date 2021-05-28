import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html'
})
export class PublicacionComponent implements OnInit {

  private publicacion: Publicacion = new Publicacion()
  publicaciones: Publicacion[]
  estaRegistrador = false;

  constructor(private publicacionService: PublicacionService,
    private inicioSesionService: InicioSesionService,
    private router: Router) { }

  ngOnInit(): void {
    this.estaRegistrador = this.inicioSesionService.isUserLoggedIn();
    if (this.estaRegistrador){
      this.publicacionService.listarPublicaciones().subscribe((data: Publicacion[]) => {
        this.publicaciones = data;
        });
    }
    if (!this.estaRegistrador){
      this.router.navigate(['/login'])
    }
  }

  public crear(): void {
    this.publicacionService.crearPublicacion(this.publicacion)
      .subscribe(publicacion => {
        this.router.navigate(['/publicaciones'])
        Swal.fire('La publiacion fue creada con éxito', 'success')
      }
      )
  }

  public megusta(publicacion: Publicacion): void {
    this.publicacionService.meGusta(publicacion)
      .subscribe(publicacion => {
        this.ngOnInit();
        Swal.fire('El me gusta fue creado con éxito', 'success')
      }
      )
  }
  public noMegusta(publicacion: Publicacion): void {
    this.publicacionService.noMeGusta(publicacion)
      .subscribe(publicacion => {
        this.ngOnInit();
        Swal.fire('El me no gusta fue creado con éxito', 'success')
      }
      )
  }

}

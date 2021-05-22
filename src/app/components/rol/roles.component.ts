import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';
import { Rol } from '../../model//rol';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  private rol: Rol = new Rol()
  roles: Rol[]
  estaRegistrador = false;

  constructor(private rolService: RolService,
    private inicioSesionService: InicioSesionService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.estaRegistrador = this.inicioSesionService.isUserLoggedIn();
    console.log('registrso ->'+ this.estaRegistrador);
    if (this.estaRegistrador){
      this.rolService.listarRoles().subscribe((data: Rol[]) => {
        this.roles = data;
        });
    }
    if (!this.estaRegistrador){
      this.router.navigate(['/login'])
    }
  }
}

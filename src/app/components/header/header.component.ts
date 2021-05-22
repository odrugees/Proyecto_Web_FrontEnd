import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  estaRegistrador = false;
  constructor(private inicioSesionService: InicioSesionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.estaRegistrador = this.inicioSesionService.isUserLoggedIn();
    console.log('menu ->'+ this.estaRegistrador);
  }

  cerrarsesion(){
    this.inicioSesionService.logout();
  }
}

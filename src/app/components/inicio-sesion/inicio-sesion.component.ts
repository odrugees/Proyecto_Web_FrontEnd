import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  usuario: string;
  contrasena: string;
  mensaje: string;
  inicioInvalido: boolean = false;
  inicioValido: boolean = false;

  constructor(private inicioSesionService: InicioSesionService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
      this.inicioSesionService.authenticationService(this.usuario, this.contrasena).subscribe((result) => {
      console.log("entra asas")
      this.inicioInvalido = false;
      this.inicioValido = true;
      this.mensaje = 'Login Successful.';
      this.router.navigate(['/roles'])
    }, () => {
      console.log("entra dos"+this.usuario+"__"+this.contrasena)

      this.inicioValido = true;
      this.inicioValido = false;
      this.mensaje ='Invalid Credentials';
    });
  }
}

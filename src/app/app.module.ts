import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RolesComponent } from './components/rol/roles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RolService } from './services/rol.service'
import { UsuarioService } from './services/usuario.service'
import { InicioSesionService } from './services/inicio-sesion.service'
import { HttpInterceptorService } from './services/http-interceptor.service'
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { FormularioRolComponent } from './components/rol/formulario-rol.component';
import { UsuariosComponent } from './components/usuario/usuarios.component';
import { FormularioUsuarioComponent } from './components/usuario/formulario-usuario.component';
import { CategoriasComponent } from './components/categoria/categorias.component';
import { FormularioCategoriaComponent } from './components/categoria/formulario-categoria.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';


const routes: Routes =[
  {path: 'login', component: InicioSesionComponent},
  {path: '', component: InicioSesionComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'rol/formulario/:mode/:id', component: FormularioRolComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuario/formulario/:mode/:id', component: FormularioUsuarioComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categoria/formulario/:mode/:id', component: FormularioCategoriaComponent},
  {path: 'logout', component: InicioSesionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    HeaderComponent,
    FooterComponent,
    FormularioRolComponent,
    UsuariosComponent,
    FormularioUsuarioComponent,
    CategoriasComponent,
    FormularioCategoriaComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },RolService,
    UsuarioService,
    InicioSesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

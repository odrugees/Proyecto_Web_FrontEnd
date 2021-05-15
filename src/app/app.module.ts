import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RolesComponent } from './components/rol/roles.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RolService } from './services/rol/rol.service'
import { UsuarioService } from './services/usuario/usuario.service'
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { FormularioRolComponent } from './components/rol/formulario-rol.component';
import { UsuariosComponent } from './components/usuario/usuarios.component';
import { FormularioUsuarioComponent } from './components/usuario/formulario-usuario.component';


const routes: Routes =[
  {path: '', redirectTo: '/roles', pathMatch: 'full'},
  {path: 'roles', component: RolesComponent},
  {path: 'rol/formulario/:mode/:id', component: FormularioRolComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuario/formulario/:mode/:id', component: FormularioUsuarioComponent},

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RolService],
  bootstrap: [AppComponent]
})
export class AppModule { }

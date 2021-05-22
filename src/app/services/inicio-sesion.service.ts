import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  private urlEndPoint: string = '/api/autenticacion';

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public usuario: String;
  public contrasena: String;

  constructor(private http: HttpClient) { }

  authenticationService(usuario: string, contrasena: string) {
    return this.http.get(`${this.urlEndPoint}/autenticar`,
      { headers: { authorization: this.createBasicAuthToken(usuario, contrasena) } }).pipe(map((res) => {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.registerSuccessfulLogin(usuario, contrasena);
      }));
  }

  createBasicAuthToken(usuario: string, contrasena: string) {
    return 'Basic ' + window.btoa(usuario + ":" + contrasena)
  }
  registerSuccessfulLogin(usuario, contrasena) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, usuario)
  }
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.usuario = null;
    this.contrasena = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}

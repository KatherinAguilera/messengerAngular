import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operation: string = 'login';
  public email: string = null;
  public password: string = null;
  // inyectar el servicio creado en authentication.ts
  constructor( private authenticationService: AuthenticationService) { 
    this.operation = 'login';
  }

  ngOnInit() {
  }
  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert('Loggeado correctamente');
        console.log(data);
      }
    ).catch(
      (error) => {
        alert('Ocurrió un error');
        console.log(error);
      }
    );
  }
  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
    .then(
      (data) => {
        alert('Registrado correctamente');
        console.log(data);
      }).catch(
        (error) => {
        alert('Ocurrió un error en el registro');
        console.log(error);
      });
  }
  loginWithFacebook() {
    this.authenticationService.loginWithFacebook()
      .then( data => {
        alert('Logeado con Facebook correctamente')
        console.log(data)
      })
      .catch( error => {
        alert('Ocurrió un error')
        console.log(error)
      })
  }

}
import {
  Component,
  AfterViewInit,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  Router,
  RouterModule
} from '@angular/router';

import {
  AuthService
} from '../../../../core/services/auth';

import {
  environment
} from '../../../../../enviroments/environment';

declare const google: any;

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './login.html',

  styleUrls: ['./login.scss']
})
export class Login implements AfterViewInit {

  /* =========================
     INJECTS
  ========================= */
  private authService =
    inject(AuthService);

  private router =
    inject(Router);

  /* =========================
     FORM
  ========================= */
  email = '';

  password = '';

  /* =========================
     INIT
  ========================= */
  ngAfterViewInit(): void {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 LOGIN COMPONENT INIT'
    );

    console.log(
      '🔥 Environment:',
      environment
    );

    console.log(
      '🔥 Google Client ID:',
      environment.googleClientId
    );

    console.log(
      '🔥 Google object:',
      google
    );

    /* =========================
       GOOGLE INIT
    ========================= */
    google.accounts.id.initialize({

      client_id:
        environment.googleClientId,

      callback:
        (response: any) =>
          this.handleGoogleLogin(response)

    });

    console.log(
      '✅ GOOGLE INITIALIZED'
    );

    /* =========================
       GOOGLE BUTTON
    ========================= */
    const googleButton =
      document.getElementById(
        'google-btn'
      );

    console.log(
      '🔥 GOOGLE BUTTON ELEMENT:',
      googleButton
    );

    google.accounts.id.renderButton(

      googleButton,

      {

        theme: 'outline',

        size: 'large',

        shape: 'pill',

        width: 320

      }

    );

    console.log(
      '✅ GOOGLE BUTTON RENDERED'
    );

    console.log(
      '🔥 ========================='
    );

  }

  /* =========================
     LOGIN
  ========================= */
  login() {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 LOGIN FORM'
    );

    console.log(
      '🔥 Email ingresado:',
      this.email
    );

    console.log(
      '🔥 Password ingresado:',
      this.password
    );

    console.log(
      '🔥 localStorage mobica-user:',
      localStorage.getItem(
        'mobica-user'
      )
    );

    console.log(
      '🔥 localStorage token:',
      localStorage.getItem(
        'token'
      )
    );

    console.log(
      '🔥 localStorage user:',
      localStorage.getItem(
        'user'
      )
    );

    /* =========================
       VALIDATION
    ========================= */
    if (

      !this.email ||

      !this.password

    ) {

      console.error(
        '❌ CAMPOS VACÍOS'
      );

      alert(
        'Completa todos los campos'
      );

      return;

    }

    /* =========================
       AUTH LOGIN
    ========================= */
    console.log(
      '🔥 Ejecutando authService.login()'
    );

    const success =
      this.authService.login({

        email:
          this.email,

        password:
          this.password

      });

    console.log(
      '🔥 Resultado login:',
      success
    );

    console.log(
      '🔥 isLoggedIn:',
      this.authService.isLoggedIn()
    );

    console.log(
      '🔥 Token después login:',
      localStorage.getItem(
        'token'
      )
    );

    console.log(
      '🔥 User después login:',
      localStorage.getItem(
        'user'
      )
    );

    /* =========================
       INVALID LOGIN
    ========================= */
    if (!success) {

      console.error(
        '❌ LOGIN INCORRECTO'
      );

      console.error(
        '❌ No se pudo autenticar usuario'
      );

      alert(
        'Correo o contraseña incorrectos'
      );

      console.log(
        '🔥 ========================='
      );

      return;

    }

    console.log(
      '✅ LOGIN CORRECTO'
    );

    console.log(
      '🔥 REDIRECT SHOULD HAPPEN'
    );

    console.log(
      '🔥 ========================='
    );

  }

  /* =========================
     GOOGLE LOGIN
  ========================= */
  handleGoogleLogin(response: any) {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 GOOGLE RESPONSE:',
      response
    );

    /* =========================
       JWT TOKEN
    ========================= */
    const token =
      response.credential;

    console.log(
      '🔥 TOKEN:',
      token
    );

    /* =========================
       SAVE TOKEN
    ========================= */
    localStorage.setItem(
      'token',
      token
    );

    console.log(
      '✅ TOKEN SAVED'
    );

    /* =========================
       DECODE TOKEN
    ========================= */
    const payload =
      JSON.parse(

        atob(
          token.split('.')[1]
        )

      );

    console.log(
      '🔥 PAYLOAD:',
      payload
    );

    /* =========================
       USER DATA
    ========================= */
    const user = {

      name:
        payload.name,

      email:
        payload.email,

      picture:
        payload.picture

    };

    console.log(
      '🔥 USER:',
      user
    );

    /* =========================
       SAVE USER
    ========================= */
    localStorage.setItem(

      'user',

      JSON.stringify(
        user
      )

    );

    console.log(
      '✅ USER SAVED'
    );

    console.log(
      '🔥 USER STORAGE:',
      localStorage.getItem(
        'user'
      )
    );

    /* =========================
       UPDATE AUTH STATE
    ========================= */
    this.authService.isLoggedIn.set(
      true
    );

    console.log(
      '✅ AUTH STATE UPDATED'
    );

    console.log(
      '🔥 isLoggedIn:',
      this.authService.isLoggedIn()
    );

    /* =========================
       REDIRECT HOME
    ========================= */
    console.log(
      '🔥 Redirecting to HOME...'
    );

    this.router.navigate([
      '/'
    ]);

    console.log(
      '✅ REDIRECT HOME'
    );

    console.log(
      '🔥 ========================='
    );

  }

}
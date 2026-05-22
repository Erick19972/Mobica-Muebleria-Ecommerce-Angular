import {
  Injectable,
  inject,
  signal
} from '@angular/core';

import {
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* =========================
     ROUTER
  ========================= */
  private router =
    inject(Router);

  /* =========================
     AUTH STATE
  ========================= */
  isLoggedIn =
    signal<boolean>(
      !!localStorage.getItem('token')
    );

  /* =========================
     FAKE USER
  ========================= */
  private fakeUser = {

    email: 'admin@mobica.com',

    password: '123456',

    name: 'Erick'

  };

  /* =========================
     CONSTRUCTOR
  ========================= */
  constructor() {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 AuthService inicializado'
    );

    console.log(
      '🔥 Token inicial:',
      localStorage.getItem('token')
    );

    console.log(
      '🔥 Usuario inicial:',
      localStorage.getItem('user')
    );

    console.log(
      '🔥 isLoggedIn:',
      this.isLoggedIn()
    );

    console.log(
      '🔥 ========================='
    );

  }

  /* =========================
     LOGIN
  ========================= */
  login(credentials: {

    email: string;

    password: string;

  }) {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 LOGIN EJECUTADO'
    );

    console.log(
      '🔥 Credentials:',
      credentials
    );

    console.log(
      '🔥 Fake User:',
      this.fakeUser
    );

    /* VALIDATE */
    const validEmail =

      credentials.email ===
      this.fakeUser.email;

    const validPassword =

      credentials.password ===
      this.fakeUser.password;

    console.log(
      '🔥 Email válido:',
      validEmail
    );

    console.log(
      '🔥 Password válido:',
      validPassword
    );

    if (

      validEmail

      &&

      validPassword

    ) {

      console.log(
        '✅ Credenciales correctas'
      );

      /* =========================
         FAKE JWT
      ========================= */
      const fakeToken =
        'mobica-jwt-token-2025';

      console.log(
        '🔥 Fake Token generado:',
        fakeToken
      );

      /* =========================
         SAVE TOKEN
      ========================= */
      localStorage.setItem(
        'token',
        fakeToken
      );

      console.log(
        '✅ Token guardado'
      );

      /* =========================
         SAVE USER
      ========================= */
      localStorage.setItem(
        'user',
        JSON.stringify({

          name:
            this.fakeUser.name,

          email:
            this.fakeUser.email

        })
      );

      console.log(
        '✅ Usuario guardado'
      );

      /* =========================
         VERIFY STORAGE
      ========================= */
      console.log(
        '🔥 localStorage token:',
        localStorage.getItem('token')
      );

      console.log(
        '🔥 localStorage user:',
        localStorage.getItem('user')
      );

      /* =========================
         UPDATE STATE
      ========================= */
      this.isLoggedIn.set(true);

      console.log(
        '✅ Estado actualizado:',
        this.isLoggedIn()
      );

      /* =========================
         REDIRECT
      ========================= */
      console.log(
        '🔥 Redirigiendo al HOME...'
      );

      this.router.navigate(['/']);

      console.log(
        '✅ Redirect ejecutado'
      );

      console.log(
        '🔥 ========================='
      );

      return true;

    }

    console.error(
      '❌ LOGIN FALLIDO'
    );

    console.error(
      '❌ Email recibido:',
      credentials.email
    );

    console.error(
      '❌ Password recibido:',
      credentials.password
    );

    console.log(
      '🔥 ========================='
    );

    return false;

  }

  /* =========================
     LOGOUT
  ========================= */
  logout() {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 LOGOUT EJECUTADO'
    );

    console.log(
      '🔥 Token antes:',
      localStorage.getItem('token')
    );

    console.log(
      '🔥 User antes:',
      localStorage.getItem('user')
    );

    /* REMOVE STORAGE */
    localStorage.removeItem('token');

    localStorage.removeItem('user');

    console.log(
      '✅ Token eliminado'
    );

    console.log(
      '✅ User eliminado'
    );

    /* UPDATE STATE */
    this.isLoggedIn.set(false);

    console.log(
      '✅ Estado actualizado:',
      this.isLoggedIn()
    );

    /* REDIRECT */
    console.log(
      '🔥 Redirigiendo a LOGIN...'
    );

    this.router.navigate(['/login']);

    console.log(
      '🔥 ========================='
    );

  }

  /* =========================
     TOKEN
  ========================= */
  getToken(): string | null {

    console.log(
      '🔥 getToken ejecutado'
    );

    const token =
      localStorage.getItem('token');

    console.log(
      '🔥 Token obtenido:',
      token
    );

    return token;

  }

  /* =========================
     USER
  ========================= */
  getUser() {

    console.log(
      '🔥 getUser ejecutado'
    );

    const user =
      localStorage.getItem('user');

    console.log(
      '🔥 User raw:',
      user
    );

    const parsedUser =
      user
        ? JSON.parse(user)
        : null;

    console.log(
      '🔥 User parsed:',
      parsedUser
    );

    return parsedUser;

  }

  /* =========================
     AUTH CHECK
  ========================= */
  isAuthenticated(): boolean {

    console.log(
      '🔥 isAuthenticated ejecutado'
    );

    const token =
      this.getToken();

    const authenticated =
      !!token;

    console.log(
      '🔥 Authenticated:',
      authenticated
    );

    return authenticated;

  }

}
import {
  Component
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

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './register.html',

  styleUrl: './register.scss'
})
export class Register {

  /* =========================
     FORM
  ========================= */
  name = '';

  email = '';

  password = '';

  /* =========================
     CONSTRUCTOR
  ========================= */
  constructor(
    private router: Router
  ) {}

  /* =========================
     REGISTER
  ========================= */
  register() {

    console.log(
      '🔥 ========================='
    );

    console.log(
      '🔥 REGISTER USER'
    );

    console.log({

      name:
        this.name,

      email:
        this.email,

      password:
        this.password

    });

    /* =========================
       VALIDATIONS
    ========================= */
    if (

      !this.name ||

      !this.email ||

      !this.password

    ) {

      alert(
        'Completa todos los campos'
      );

      return;

    }

    /* =========================
       USER OBJECT
    ========================= */
    const newUser = {

      name:
        this.name,

      email:
        this.email,

      password:
        this.password

    };

    console.log(
      '🔥 Usuario a guardar:',
      newUser
    );

    /* =========================
       SAVE USER
    ========================= */
    localStorage.setItem(

      'mobica-user',

      JSON.stringify(
        newUser
      )

    );

    console.log(
      '✅ Usuario guardado'
    );

    console.log(
      '🔥 localStorage:',
      localStorage.getItem(
        'mobica-user'
      )
    );

    /* =========================
       SUCCESS
    ========================= */
    alert(
      'Cuenta creada correctamente'
    );

    /* =========================
       REDIRECT LOGIN
    ========================= */
    this.router.navigate([
      '/login'
    ]);

    console.log(
      '🔥 ========================='
    );

  }

}
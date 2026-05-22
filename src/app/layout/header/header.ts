import {
  Component,
  HostListener,
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
} from '../../core/services/auth';

@Component({
  selector: 'app-header',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  templateUrl: './header.html',

  styleUrl: './header.scss'
})
export class HeaderComponent {

  /* =========================
     AUTH SERVICE
  ========================= */
  public authService =
    inject(AuthService);

  /* =========================
     ROUTER
  ========================= */
  private router =
    inject(Router);

  /* =========================
     USER MENU
  ========================= */
  showUserMenu = false;

  /* =========================
     SEARCH
  ========================= */
  searchTerm = '';

  /* =========================
     USER CLICK
  ========================= */
  handleUserClick(event?: Event) {

    event?.stopPropagation();

    /* NOT LOGGED */
    if (
      !this.authService.isLoggedIn()
    ) {

      this.router.navigate([
        '/login'
      ]);

      return;

    }

    /* TOGGLE MENU */
    this.showUserMenu =
      !this.showUserMenu;

  }

  /* =========================
     SEARCH ROUTES
  ========================= */
  search() {

    const value =
      this.searchTerm
        .trim()
        .toLowerCase();

    /* EMPTY */
    if (!value) {

      return;

    }

    /* MAP ROUTES */
    const routes: any = {

      'hot buys':
        '/categoria/hot-buys',

      'sala':
        '/categoria/sala',

      'comedor':
        '/categoria/comedor',

      'colchones':
        '/categoria/colchones',

      'recamara':
        '/categoria/recamara',

      'recámara':
        '/categoria/recamara',

      'oficina':
        '/categoria/oficina',

      'exterior':
        '/categoria/exterior',

      'accesorios':
        '/categoria/accesorios',

      'small spaces':
        '/categoria/small-spaces',

      'business':
        '/categoria/business',

      'disenadores':
        '/categoria/disenadores',

      'diseñadores':
        '/categoria/disenadores',

      'favoritos':
        '/categoria/favoritos',

      'carrito':
        '/cart',

      'cart':
        '/cart',

      'tiendas':
        '/tiendas',

      'login':
        '/login'

    };

    /* MATCH */
    const route =
      routes[value];

    /* REDIRECT */
    if (route) {

      this.router.navigate([
        route
      ]);

      return;

    }

    /* DEFAULT PRODUCTS */
    this.router.navigate([
      '/products'
    ]);

  }

  /* =========================
     CLOSE OUTSIDE
  ========================= */
  @HostListener(
    'document:click',
    ['$event']
  )
  closeMenu(event: Event) {

    const target =
      event.target as HTMLElement;

    const clickedInside =
      target.closest('.user-menu');

    if (!clickedInside) {

      this.showUserMenu = false;

    }

  }

  /* =========================
     GET USER
  ========================= */
  getUser() {

    return this.authService.getUser();

  }

  /* =========================
     LOGOUT
  ========================= */
  logout() {

    /* CLOSE MENU */
    this.showUserMenu = false;

    /* LOGOUT */
    this.authService.logout();

  }

}
import {
  ApplicationConfig
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient
} from '@angular/common/http';

import {
  routes
} from './app.routes';

export const appConfig: ApplicationConfig = {

  providers: [

    /* ROUTES */
    provideRouter(routes),

    /* HTTP CLIENT */
    provideHttpClient()

  ]

};
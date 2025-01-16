import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAuth0({
      domain: 'dev-ujucu4328alcrthb.us.auth0.com',
      clientId: 'SYvKw9lVlYRdOsmgyIgzsHI7LfrOz3cU',
      authorizationParams: {
        redirect_uri: window.location.origin

      }

    }),
    provideRouter(routes), // Cung cấp routes
    importProvidersFrom(HttpClientModule), // Cung cấp HttpClient cho API
  ]
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PaymentHomeComponent } from './PaymentHome/PaymentHome.component';

export const appConfig: ApplicationConfig = {  
  providers: [provideRouter(routes),PaymentHomeComponent],
};

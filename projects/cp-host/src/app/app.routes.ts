import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('cpProducts/ProductHomeComponent').then(m =>  m.ProductHomeComponent),
    },
    {
        path: 'payment',
        loadComponent: () => import('cpPayment/PaymentHomeComponent').then(m => m.PaymentHomeComponent),   
    },
    // {
    //     path: 'clients',
    //     loadChildren:() => loadRemoteModule({
    //         type: 'module',
    //         remoteEntry: 'http://localhost:4203/remoteEntry.js',
    //         exposedModule: './ClientsHomeComponent',
    //     }).then(m => m.ClientsHomeComponent)
    // },
];

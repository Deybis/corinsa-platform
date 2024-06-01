import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('cpProducts/ProductHomeComponent').then(m =>  m.ProductHomeComponent),
    },
    {
        path: 'payment',
        loadComponent: () => import('cpPayment/PaymentHomeComponent').then(m => m.PaymentHomeComponent),   
    },
    {
        path: 'clients',
        loadComponent: () => import('cpClients/ClientsHomeComponent').then(m => m.ClientsHomeComponent),
    },
];

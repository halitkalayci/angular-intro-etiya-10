import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    // Parent-Child
    {path:'login', component:Login},
    {
        path: '',
        component: MainLayout,
        children: [
                {path:'', redirectTo:'homepage', pathMatch:'full'},
                {path:'homepage', component:Homepage},
                {path:'products', component:Products}
        ]
    },
    {
        path:'**',
        redirectTo:'homepage'
    }
];

import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path:'', redirectTo:'homepage', pathMatch:'full'},
    {path:'homepage', component:Homepage},
    {path:'products', component:Products},
    {path:'login', component:Login}
];

import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';
import { CustomerCreate } from './pages/customer-create/customer-create';
import { PersonalInfo } from './pages/customer-create/personal-info/personal-info';
import { ContactInfo } from './pages/customer-create/contact-info/contact-info';
import { CustomerPreviewComponent } from './pages/customer-create/preview/preview';

export const routes: Routes = [
    // Parent-Child
    {path:'login', component:Login},
    {
        path: '',
        component: MainLayout,
        children: [
                {path:'', redirectTo:'homepage', pathMatch:'full'},
                {path:'homepage', component:Homepage},
                {path:'products', component:Products, canActivate:[authGuard]},
                {
                    path:'customer-create',
                    component: CustomerCreate,
                    children: [
                        {path: 'personal-info', component: PersonalInfo},
                        {path:'contact-info', component: ContactInfo},
                        {path:'preview', component:CustomerPreviewComponent}
                    ]
                }
        ]
    },
    {
        path:'**',
        redirectTo:'homepage'
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'catalouge', children: [
            { path: '', component: CatalougeComponent },
            { path: ':id', component: DetailsComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'order', component: OrderComponent },
    { path: 'orderList', component: OrderListComponent }




];

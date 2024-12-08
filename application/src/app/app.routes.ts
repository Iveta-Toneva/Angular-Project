import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { userGuard } from './guards/user-guard.guard';
import { guestGuard } from './guards/guest.guard';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'catalouge', children: [
            { path: '', component: CatalougeComponent },
            { path: ':id', component: DetailsComponent }
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
    { path: 'order', component: OrderComponent, canActivate: [userGuard] },
    { path: 'orderList', component: OrderListComponent, canActivate: [userGuard] },
    {
        path: 'edit', children: [
            { path: ':id', component: EditOrderComponent, canActivate: [userGuard] }
        ]
    },
    {
        path: 'details', children: [
            { path: ':id', component: OrderDetailsComponent, canActivate: [userGuard] }
        ]
    },
    { path: 'profile', component: ProfileComponent, canActivate: [userGuard] },
    { path: 'error', component: ErrorComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }


];

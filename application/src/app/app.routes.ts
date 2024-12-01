import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalougeComponent } from './catalouge/catalouge.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'catalouge', component: CatalougeComponent },
];

import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';

export const routes: Routes = [
    { path: 'people', loadComponent: () => import("./components/people-list/people-list.component").then((m) => m.PeopleListComponent)},
    { path: 'cars', loadComponent: () => import("./components/cars-list/cars-list.component").then((m) => m.CarsListComponent)},
    { path: '', redirectTo: '/people', pathMatch: 'full' }
  ];

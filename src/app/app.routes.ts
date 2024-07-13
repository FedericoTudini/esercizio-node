import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'people', loadComponent: () => import("./components/people/people-list/people-list.component").then((m) => m.PeopleListComponent)},
    { path: 'cars', loadComponent: () => import("./components/cars/cars-list/cars-list.component").then((m) => m.CarsListComponent)},
    { path: '', redirectTo: '/people', pathMatch: 'full' }
  ];

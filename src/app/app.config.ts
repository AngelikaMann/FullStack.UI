import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { provideHttpClient } from '@angular/common/http';
export const appRoutes:Routes=[
  {path:'employees', component:EmployeesListComponent}
]
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideClientHydration()]
};

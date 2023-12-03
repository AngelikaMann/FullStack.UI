import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { provideHttpClient } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
export const appRoutes: Routes = [
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
  ],
};

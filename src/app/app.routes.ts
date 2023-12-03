import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';

export const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
];
NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});
export class AppRoutingModule {}

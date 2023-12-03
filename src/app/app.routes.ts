import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

export const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent }
];
NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});
export class AppRoutingModule {}

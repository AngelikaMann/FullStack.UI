import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  ngOnInit(): void {}

  addEmployee() {
    this.employeesService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}

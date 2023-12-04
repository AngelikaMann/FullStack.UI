import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { response } from 'express';
import { Employee } from '../../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService, private router:Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        if (id) {
          this.employeesService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            },
          });
        }
      },
    });
  }

  updateEmployee() {
    this.employeesService.updateEmployee(
      this.employeeDetails.id,
      this.employeeDetails
    ).subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    });
  }
}

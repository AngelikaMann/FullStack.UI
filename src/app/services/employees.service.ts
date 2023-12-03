import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 
readonly baseApiUrl='https://localhost:7261/api';
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/employees')
  }
}

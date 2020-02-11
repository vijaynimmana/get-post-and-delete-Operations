import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from './model/employee.model';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  constructor(private http : HttpClient) { }
  baseUrl: string = 'http://localhost:3000/posts/';
  getList() {  
    return this.http.get<Employee[]>(this.baseUrl);  
  }  
  addList(empdata){
    return this.http.post<Employee[]>(this.baseUrl , empdata)
  }
  deleteEmployees(id: number) {  
    return this.http.delete<Employee[]>(this.baseUrl + id);  
  } 
}

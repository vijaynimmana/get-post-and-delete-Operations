import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  
  product : Employee[];
  deleteApi: Employee[];
  
  constructor(private data: EmployeeService) { }

  getData(){
     this.data.getList().subscribe(res =>{
      this.product = res;
      console.log(res)
    })
  }
  deleteProduct(id: number){
    this.data.deleteEmployees(id).subscribe(res =>{
      this.deleteApi = res;
      this.data.getList();
      window.location.reload();
    })
  }

  ngOnInit() {
    this.getData();  
  }

}

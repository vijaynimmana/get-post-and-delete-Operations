import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  empForm = new FormGroup ({
    id : new FormControl(''),
    employee_name : new FormControl(''),
    employee_salary : new FormControl(''),
    employee_age : new FormControl('')
  })
  constructor(private data: EmployeeService) { }

  onSubmit(value){
    // console.log(value);
    this.data.addList(value).subscribe(res => {
      console.log(res);
    })
  }
  

  ngOnInit() {
  }

}

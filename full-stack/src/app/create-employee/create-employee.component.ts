import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();

  constructor(private es:EmployeeService,private router:Router) { }
  saveEmployee(){
    this.es.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.employee);
    console.log('create--employee working fine');
    this.saveEmployee();
  }

}

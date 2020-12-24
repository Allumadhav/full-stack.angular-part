import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService,private router:Router) { }
  
  ngOnInit() {
    this.getEmployees();
    // this.employees=[
    //   {
    //     "id":1,
    //     "name":"rajeev",
    //     "age":40
    //   },
    //   {
    //     "id":2,
    //     "name":"ekta",
    //     "age":40
    //   },
    //   {
    //     "id":3,
    //     "name":"gunika",
    //     "age":15
    //   }
    // ];  
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
	this.employees=data;
    });
  }
  updateEmployee(id: number){
    console.log(`update employee method`);
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
      console.log(data);
    })
}
employeeDetails(id: number){
  console.log(` employee-details method`);
    this.router.navigate(['employee-details', id]);
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  LoginEmployee(){
    this.employeeService.getEmployeeByEmailAndPassword(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList(){
     this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.LoginEmployee();
  }
}

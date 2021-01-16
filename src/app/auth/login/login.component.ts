import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employeeservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;
  constructor( 
        private employeeservice:Employeeservice, 
        private formbuilder:FormBuilder,
        private router:Router) 
        { 

        }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  onSubmit(loginForm : FormGroup){
    let login=this.loginForm.value;
    this.login(login);
  }
  login(loginEmployee: Employee) {
    console.log(' ------------ >>> ');
    // this.employeeservice.loginemployee(loginEmployee).subscribe(
    //   employee => {
    //     debugger;
    //     var succ = employee;
    //     if(succ){
    //     this.loginForm.reset();
    //     localStorage.setItem("Employee", JSON.stringify(succ));
    //     this.router.navigate(['dashboard']);
    //     } else {
    //       this.Error = true;
    //       this.massage = "User ID/Password Wrong";
    //     }
    //   }
    // )
    this.router.navigate(['dashboard']);
  }
}

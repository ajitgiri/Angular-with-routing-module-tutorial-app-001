import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Employeeservice } from '../employeeservice';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  datasaved = false;
  message: string;
  error = false;
  constructor(private formbuilder: FormBuilder, private employeeservice: Employeeservice) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
      this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit(regForm) {
    
    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.message = "User Created";
       this.regForm.reset();
      }
    )
  }
}
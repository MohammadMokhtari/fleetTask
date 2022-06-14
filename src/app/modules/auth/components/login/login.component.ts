import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.maxLength(6)])
    })
  }
  public loginForm : FormGroup

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false
  credencialsCorrect = true;
  userMock0 = {
    email:'henrique@ufu.br',
    senha:'123123'
  }

  userMock1 = {
    email:'larissa@ufu.br',
    senha:'123123'
  }

  userMock2 = {
    email:'israel@ufu.br',
    senha:'123123'
  }

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
      if (this.loginForm.invalid) {
        return;
      }
      if (this.userMock0.email == this.loginForm.value.email && this.userMock0.senha == this.loginForm.value.senha
        || this.userMock1.email == this.loginForm.value.email && this.userMock1.senha == this.loginForm.value.senha
        || this.userMock2.email == this.loginForm.value.email && this.userMock2.senha == this.loginForm.value.senha){
        this.router.navigate(['/home'])
      }
      
      this.credencialsCorrect = false
  }
}
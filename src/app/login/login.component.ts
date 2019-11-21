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
  user = {
    email:'henrique@ufu.br',
    senha:'123123'
  }

  user1 = {
    email:'larissa@ufu.br',
    senha:'123123'
  }

  user2 = {
    email:'israel@ufu.br',
    senha:'123123'
  }

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  onSubmit() {
      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
      if (this.user.email == this.loginForm.value.email && this.user.senha == this.loginForm.value.senha){
        this.router.navigate(['/'])
      }
      if (this.user1.email == this.loginForm.value.email && this.user1.senha == this.loginForm.value.senha){
        this.router.navigate(['/'])
      }
      if (this.user2.email == this.loginForm.value.email && this.user2.senha == this.loginForm.value.senha){
        this.router.navigate(['/'])
      }
      
      this.credencialsCorrect = false
  }
}
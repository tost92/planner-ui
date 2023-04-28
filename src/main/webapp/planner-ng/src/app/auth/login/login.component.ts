import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.authService.isLogged();
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    if (email && password) {
      console.log(email, password);
      this.authService.authenticate(email, password).subscribe({
      next: (result) => {
        this.route.navigate(['home']);
        console.log(result);
      }, 
      error: (error) => {
        console.log(error);        
      }
     });
    }
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {}

  register() {
    const firstname = this.registerForm.controls.firstname.value;
    const lastname = this.registerForm.controls.lastname.value;
    const email = this.registerForm.controls.email.value;
    const password = this.registerForm.controls.password.value;

    if (firstname && lastname && email && password) {
      console.log(email, password);
      this.authService.register(firstname, lastname, email, password).subscribe({
      next: (result) => {
        this.route.navigate(['login']);
        console.log(result);
      }, 
      error: (error) => {
        console.log(error);        
      }
     });
    }
  }
}

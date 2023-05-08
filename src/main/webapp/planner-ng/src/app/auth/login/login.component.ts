<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
=======
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
  });

  constructor(
    private authService: AuthService,
    private route: Router
<<<<<<< HEAD
  ) {}
=======
  ) { }
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd

  ngOnInit(): void {
    this.authService.isLogged();
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    if (email && password) {
<<<<<<< HEAD
      this.authService.authenticate(email, password).subscribe({
        next: (result) => {
          //console.log(result);
          this.route.navigate(['home']);
        },
        error: (error) => {
          //console.log(error);
        },
      });
    }
  }
=======
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

>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
}

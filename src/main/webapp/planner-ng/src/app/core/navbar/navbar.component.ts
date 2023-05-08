import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userEmail: any;
  userName: any;
  userSurname: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserInfo(this.authService.getUserEmail()).subscribe({
      next: (result) => {
        console.log('userinfo ', result);          
        this.userName = result.name;
        this.userSurname = result.surname;
      }
    });  
  }

  logOut(): void {
    this.authService.logout();
  }
}

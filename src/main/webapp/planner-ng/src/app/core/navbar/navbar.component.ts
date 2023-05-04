import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmail = this.authService.loggedUser();
  }

  logOut() {
    this.authService.logout();
  }
}

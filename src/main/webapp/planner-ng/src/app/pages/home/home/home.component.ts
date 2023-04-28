import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  getEventsList() {
    this.authService.getAllEvents().subscribe({
      next: (result) => {
        console.log(result);        
      },
      error: (error) => {
        console.log(error);        
      }
    })
  }

}

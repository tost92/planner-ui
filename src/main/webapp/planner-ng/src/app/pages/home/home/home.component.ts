import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/Event/event.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Event} from 'src/app/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: Event[] = new Array();
  userEmail: any;

  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  getEventsList() {
    this.eventService.getAllEvents().subscribe({
      next: (result) => {
        this.events = result;
        console.log('get lista eventi ', this.events);
      },
      error: (error) => {
        //console.log(error);
      },
    });
  }

}

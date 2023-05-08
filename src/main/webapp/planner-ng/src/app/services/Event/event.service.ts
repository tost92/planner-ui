import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  serverUrl: string = `http://${environment.server}:${environment.port}`;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {  
    return this.http.get<Event[]>(
      `${this.serverUrl}${environment.plannerServerUri}/event/findAll`
    );
  }
}

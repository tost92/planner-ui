import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl: string = `http://${environment.server}:${environment.port}`;

  constructor(private http: HttpClient, private route: Router) { }

  register(firstname: string, lastname: string, email: string, password: string) {
    let sub = this.http.post(`${this.serverUrl}${environment.publicServerUri}/register`, {firstname, lastname, email, password});
    return sub;
  }

  authenticate(email: string, password: string) {
    let sub = this.http.post(`${this.serverUrl}${environment.publicServerUri}/authenticate`, {email, password}).pipe(
      map((response: any) => {
        this.setSession(response);
        return response;
      })
    );
    return sub;
  }

  private setSession(response: any) {  
    localStorage.setItem('token', response.access_token);
    localStorage.setItem('expires_at', this.getExpiration().format());
  }

  getExpiration() {
    let expires_at = moment().add(1, 'hours');
    return expires_at;
  }

  isLogged(): boolean {
    const expires_at = moment(localStorage.getItem('expires_at'));
    console.log('adesso ', moment());
    console.log('expires_at ', expires_at);    
    console.log('adesso è prima della scadenza ', moment().isBefore(expires_at));
    
    return moment().isBefore(expires_at);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.route.navigate(['login']);
  }

  //da spostare
  getAllEvents() {
    console.log(`${this.serverUrl}${environment.plannerServerUri}/event/findAll`);    
    return this.http.get(`${this.serverUrl}/api/planner/event/findAll`);
  }
}

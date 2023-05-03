import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'planner-ui';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.logAccess()
  }

  ngAfterContentChecked(): void {
    this.logAccess()
  }


  logAccess(): boolean {
    return this.authService.isLogged();
  }
}

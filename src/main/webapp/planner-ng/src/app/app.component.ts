import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'planner-ui';
  userEmail: any;

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('it');
    translate.use('it');
  }

  ngOnInit(): void {}

  isLogged() {
    return this.authService.isLogged();
  }
}

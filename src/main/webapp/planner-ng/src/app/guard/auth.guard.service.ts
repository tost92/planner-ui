import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
=======
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
=======
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
    if (!this.authService.isLogged()) {
      this.route.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}

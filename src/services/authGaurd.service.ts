import { Injectable } from '@angular/core';
import { AuthSerivceService } from './authSerivce.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private authService: AuthSerivceService, private router: Router) {}

  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      console.log('authhhhhhhhhhhhhhhhhhh')
      return true;
    } else {
      console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
      this.router.navigate(['/login']);
      return false;
    }
  }
}

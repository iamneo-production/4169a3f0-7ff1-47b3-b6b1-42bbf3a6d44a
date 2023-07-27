import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.userService.isLoggedIn()) {
        // User is logged in, check the user role
        const userRole = this.userService.getUserRole();

        // If the user is an admin and trying to access customerside pages
        if (userRole === 'admin' && state.url.includes('/customerside')) {
          this.router.navigate(['/admin']);
          return false;
        }

        // If the user is a customer and trying to access adminside pages
        if (userRole === 'customer' && state.url.includes('/adminside')) {
          this.router.navigate(['/userhomepage']);
          return false;
        }

        // If the user is logged in and allowed to access the page
        return true;
      } else {
        // User is not logged in, redirect to the login page
        this.router.navigate(['/login']);
        return false;
      }
  }
}
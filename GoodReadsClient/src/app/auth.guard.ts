import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true
    } else {
      this.router.navigate([''])
      alert("sign in first to be able to see our awesome collection of books")
      return false
    }
  }
}
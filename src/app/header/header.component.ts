import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  public logOut() {
    this.authService.logout();
  }

  public goToProfile() {
    this.router.navigate(['profile']);
  }

  public goToHome() {
    this.router.navigate(['home']);
  }
}

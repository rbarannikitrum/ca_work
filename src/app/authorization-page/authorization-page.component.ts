import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
})
export class AuthorizationPageComponent {
  public authForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public auth: AuthService) {}

  public register() {
    const login = this.authForm.controls['login'].value;
    const passsword = this.authForm.controls['password'].value;
    this.auth.register(login, passsword);
  }

  public authorization() {
    const login = this.authForm.controls['login'].value;
    const passsword = this.authForm.controls['password'].value;
    if (login && passsword) this.auth.authorize(login, passsword);
    else this.auth.err = true;
  }
}

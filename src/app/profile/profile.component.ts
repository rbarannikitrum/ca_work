/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private dataArray = ['login', 'password', 'phoneNumber', 'address', 'email'];

  public userInfo: FormGroup = new FormGroup({
    login: new FormControl({ value: '', disabled: true }),
    password: new FormControl({ value: '', disabled: true }, Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g,
      ),
    ]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    ]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.dataArray.map((el: string) => {
      this.userInfo.controls[el].setValue(JSON.parse(this.authService.authValue)[el] || '');
    });
  }

  public saveData() {
    const newData = {
      login: this.userInfo.controls['login'].value,
      password: this.userInfo.controls['password'].value,
      phoneNumber: this.userInfo.controls['phoneNumber'].value,
      address: this.userInfo.controls['address'].value,
      email: this.userInfo.controls['email'].value,
    };
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      if (
        JSON.parse(localStorage[key]).login === newData.login &&
        JSON.parse(localStorage[key]).password === newData.password
      ) {
        localStorage[key] = JSON.stringify(newData);
      }
    }
    console.log(localStorage);
  }
}

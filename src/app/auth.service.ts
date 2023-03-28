import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authStatus: boolean = false;

  public authValue: any = '';

  public err = false;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('active_user')) {
      const currentUser = localStorage.getItem('active_user') as string;
      this.authValue = currentUser;
      this.authStatus = true;
    }
  }

  public register(login: string, password: string) {
    // return this.http
    //   .post('http://localhost:4001/api/auth/registration', {
    //     login: login,
    //     password: password,
    //   })
    //   .subscribe(
    //     () => {
    //       this.authorize(login, password);
    //     },
    //     (err) => console.log(err),
    //   );
    localStorage.setItem(
      `user${localStorage.length}`,
      JSON.stringify({ login: login, password: password }),
    );
  }

  public authorize(login: string, password: string) {
    // return this.http
    //   .post('http://localhost:4001/api/auth/login', {
    //     login: login,
    //     password: password,
    //   })
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       const { access_token, refresh_token } = res.data.accessInfo;
    //       if (access_token && refresh_token) {
    //         this.authStatus = true;
    //         localStorage.setItem('access_token', access_token);
    //         localStorage.setItem('refresh_token', refresh_token);
    //         this.router.navigate(['home']);
    //       } else {
    //         this.err = true;
    //       }
    //       console.log(res);
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.err = true;
    //       // this.authStatus = true;
    //       // this.router.navigate(['home']);
    //     },
    //   );
    const users = [];
    for (const key in localStorage) {
      users.push(JSON.parse(localStorage.getItem(key) as string));
    }
    let usersArray = Object.values(users);
    usersArray = usersArray.filter((el) => el);
    usersArray = usersArray.filter((el) => el.login === login && el.password === password);
    if (usersArray.length) {
      this.authStatus = true;
      this.authValue = usersArray[0];
      localStorage.setItem('active_user', JSON.stringify(this.authValue));
      this.router.navigate(['home']);
    } else this.err = true;
  }

  public logout() {
    localStorage.removeItem('active_user');
    this.authStatus = false;
    this.router.navigate(['']);
  }
}

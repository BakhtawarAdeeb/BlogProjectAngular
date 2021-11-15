import { Injectable } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
 

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService{

// fuser: any;
 username: string;
 roles:any;
// if (user) {
//   this.fuser= JSON.parse(user);
//   this.username = this.fuser.username;
// }



  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getUsername(): string {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const users= JSON.parse(user);
      this.username= users.username;
    }
    return(this.username);
  }

  public isAdmin(): boolean{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const users= JSON.parse(user);
      this.roles = users.roles;
      if(this.roles.includes('ROLE_ADMIN'))
      {return true;}

      return false;

    }
    return false;

  }

  public isLoggedIn(): boolean{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
  }
  return false;
}
}
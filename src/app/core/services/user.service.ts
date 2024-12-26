import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  public guid!: string;
  public usercreds!: LoginModel;
  public loggedIn!: boolean;

  constructor(http: HttpClient) {
    super(http); // Pass BaseService to the parent constructor
  }

  updateUserGuid(guid: string) {
    this.guid = guid;
    this.loggedIn = !!guid;
  }
  login(loginModel: LoginModel) {
    this.usercreds = loginModel;
    return this.post<string>('login', loginModel);
  }
  isAuthenticated() {
    return this.loggedIn && this.guid;
  }
}

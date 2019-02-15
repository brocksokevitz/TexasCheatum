import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    console.log("inside the login method in credentials.service");
    return this.http.post<any>("/TexasCheatum/servlet/login", {username: username, password: password});
  }

  logout() {
    console.log("inside the logout method in credentials.service");
    return this.http.get<any>("/TexasCheatum/servlet/logout");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>("/servlet/login", {username: username, password: password});
  }
}

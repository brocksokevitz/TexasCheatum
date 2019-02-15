import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {}

  newGame() {
    console.log("inside the newGame method of settings.service");
    return this.http.get<any>("/TexasCheatum/servlet/start");
  }

  joinGame() {
    console.log("inside the joinGame method of settings.service");
    return this.http.get<any>("/TexasCheatum/servlet/join");
  }
}
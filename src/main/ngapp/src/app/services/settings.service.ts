import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {}

  newGame() {
    console.log("inside the newGame method of settings.service");
    return this.http.post<string>("/TexasCheatum/servlet/start", "");
  }

  joinGame(gameID: string) {
    console.log("inside the joinGame method of settings.service");
    return this.http.post<any>("/TexasCheatum/servlet/join", {gameID: gameID});
  }
}
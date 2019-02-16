import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getHand() {
    console.log("inside the getHand method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getHand", {responseType: "text" as "json"});
  }

  getFlop() {
    console.log("inside the getFlop method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getFlop", {responseType: "text" as "json"});
  }

  getTurn() {
    console.log("inside the getTurn method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getTurn", {responseType: "text" as "json"});
  }

  getRiver() {
    console.log("inside the getRiver method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getRiver", {responseType: "text" as "json"});
  }

  cheat() {
    console.log("inside the cheat method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/cheat");
  }
}
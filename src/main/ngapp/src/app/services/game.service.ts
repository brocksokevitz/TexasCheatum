import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public round: number = 0;

  constructor(private http: HttpClient) {}

  getHand() {
    console.log("inside the getHand method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getHand");
  }

  getFlop() {
    console.log("inside the getFlop method of game.service");
    this.round = 1;
    return this.http.get<any>("/TexasCheatum/servlet/getFlop");
  }

  getTurn() {
    console.log("inside the getTurn method of game.service");
    this.round = 2;
    return this.http.get<any>("/TexasCheatum/servlet/getTurn");
  }

  getRiver() {
    console.log("inside the getRiver method of game.service");
    this.round = 3;
    return this.http.get<any>("/TexasCheatum/servlet/getRiver");
  }

  cheat() {
    console.log("inside the cheat method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/cheat");
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getHand() {
    console.log("inside the getHand method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getHand");
  }

  getFlop() {
    console.log("inside the getFlop method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getFlop");
  }

  getTurn() {
    console.log("inside the getTurn method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getTurn");
  }

  getRiver() {
    console.log("inside the getRiver method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/getRiver");
  }

  cheat() {
    console.log("inside the cheat method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/cheat");
  }

  whosTurnIsItAnyways() {
    console.log("inside whosTurnIsItAnyways method of game.service");
    return this.http.get<any>("/TexasCheatum/servlet/status")
  }

  checking(action: string) {
    console.log("inside checking method of game.service");
    return this.http.post<any>("/TexasCheatum/servlet/action", {action: action})
  }

  betting(amount: number, action: string) {
    console.log("inside betting method of game.service");
    return this.http.post<any>("/TexasCheatum/servlet/action", {amount: amount, action: action})
  }

  calling(action: string) {
    console.log("inside calling method of game.service");
    return this.http.post<any>("/TexasCheatum/servlet/action", {action: action})
  }

  raising(amount: number, action: string) {
    console.log("inside raising method of game.service");
    return this.http.post<any>("/TexasCheatum/servlet/action", {amount: amount, action: action})
  }

  folding(action: string) {
    console.log("inside folding method of game.service");
    return this.http.post<any>("/TexasCheatum/servlet/action", {action: action})
  }
}
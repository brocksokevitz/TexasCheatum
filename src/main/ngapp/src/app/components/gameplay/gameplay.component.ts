import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {
  private betAmount: number;
  private raiseAmount: number;
  private alive: boolean;
  private status: any = {};
  private action: string;
  private tableCards: any = [];
  private notFolded: boolean = true;

  constructor(
    private gameServ: GameService
  ) {this.alive = true;}

  ngOnInit() {
    IntervalObservable.create(2500).takeWhile(
      () => this.alive).subscribe(
        () => {
          this.gameServ.whosTurnIsItAnyways().subscribe(
            data => {
              console.log(this.status);
              this.status.pot = data.pot;
              this.status.balance = data.balance;
              this.status.minimum = data.minimum;
              this.status.turn = data.turn;
              this.status.game = data.game;
              this.status.playerBet = data.playerBet;
              this.status.hand = data.hand;
              this.status.table = data.table;
              this.tableCards = this.status.table;
            }
          );
        }
      );
  }

  ngOnDestroy() {
    this.alive = false;
  }

  checking() {
    console.log("inside the checking method of gameplay.component");
    this.action = "check";
    this.gameServ.checking(this.action).subscribe();
  }

  betting() {
    console.log("inside the betting method of gameplay.component");
    this.action = "bet";
    this.gameServ.betting(this.betAmount, this.action).subscribe();
    this.betAmount = null;
  }

  calling() {
    console.log("inside the calling method of gameplay.component");
    this.action = "call";
    this.gameServ.calling(this.action).subscribe();
  }

  raising() {
    console.log("inside the raising method of gameplay.component");
    this.action = "raise";
    this.gameServ.raising(this.raiseAmount, this.action).subscribe();
    this.raiseAmount = null;
  }

  folding() {
    console.log("inside the folding method of gameplay.component");
    this.action = "fold";
    this.gameServ.folding(this.action).subscribe();
    this.notFolded = false;
  }
}
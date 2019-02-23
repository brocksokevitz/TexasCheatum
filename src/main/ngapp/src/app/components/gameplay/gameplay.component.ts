import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {
  private betAmount: number = null;
  private callAmount: number = null;
  private raiseAmount: number = null;
  public totalAmount: number = 0;
  private round: number = 0;
  private postFlop: boolean = false;

  constructor(
    private gameServ: GameService
  ) {}

  ngOnInit() {
  }

  betting() {
    this.totalAmount += this.betAmount;
    console.log(this.totalAmount);
    this.betAmount = null;
    this.round = this.gameServ.round;
    console.log(this.round);
    if(this.round > 0) {
      this.postFlop = true;
    }
  }

  calling() {
    this.totalAmount += this.callAmount;
    console.log(this.totalAmount);
    this.callAmount = null;
    this.round = this.gameServ.round;
    console.log(this.round);
    if(this.round > 0) {
      this.postFlop = true;
    }
  }

  raising() {
    this.totalAmount += this.raiseAmount;
    console.log(this.totalAmount);
    this.raiseAmount = null;
    this.round = this.gameServ.round;
    console.log(this.round);
    if(this.round > 0) {
      this.postFlop = true;
    }
  }
}
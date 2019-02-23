import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {
  private money: any = {};
  private totalBets: number;

  constructor() {}

  ngOnInit() {
  }

  bet() {
    this.totalBets += this.money.bet;
    console.log(this.totalBets);
  }

  call() {
    this.totalBets += this.money.call;
    console.log(this.totalBets);
  }

  raise() {
    this.totalBets += this.money.raise;
    console.log(this.totalBets);
  }
}

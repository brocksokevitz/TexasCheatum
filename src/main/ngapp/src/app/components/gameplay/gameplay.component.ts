import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {
  private betAmount: number = null;
  private callAmount: number = null;
  private raiseAmount: number = null;
  private totalAmount: number = null;

  constructor() {}

  ngOnInit() {
  }

  betting() {
    console.log(this.totalAmount);
    console.log(this.betAmount);
    this.totalAmount += this.betAmount;
    console.log(this.totalAmount);
    this.betAmount = null;
  }

  calling() {
    console.log(this.totalAmount);
    console.log(this.callAmount);
    this.totalAmount += this.callAmount;
    console.log(this.totalAmount);
    this.callAmount = null;
  }

  raising() {
    console.log(this.totalAmount);
    console.log(this.raiseAmount);
    this.totalAmount += this.raiseAmount;
    console.log(this.totalAmount);
    this.raiseAmount = null;
  }
}

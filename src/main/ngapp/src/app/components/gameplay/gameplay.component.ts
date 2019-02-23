import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {
  private betAmount: number;
  private callAmount: number;
  private raiseAmount: number;
  private totalAmount: number;

  constructor() {}

  ngOnInit() {
  }

  bet() {
    this.totalAmount += this.betAmount;
    console.log(this.totalAmount);
  }

  call() {
    this.totalAmount += this.callAmount;
    console.log(this.totalAmount);
  }

  raise() {
    this.totalAmount += this.raiseAmount;
    console.log(this.totalAmount);
  }
}

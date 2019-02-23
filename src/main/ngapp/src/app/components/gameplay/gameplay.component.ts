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
  private postFlop: boolean;
  private alive: boolean;
  private status: any = {};
  private action: string;

  constructor(
    private gameServ: GameService
  ) {this.alive = true;}

  ngOnInit() {
    IntervalObservable.create(2500).takeWhile(
      () => this.alive).subscribe(
        () => {
          this.gameServ.whosTurnIsItAnyways().subscribe(
            data => {
              this.status = data;
              console.log(this.status);
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
    this.gameServ.checking(this.action).subscribe(
      data => {
        console.log("checking: " + data);
      }
    );
  }

  betting() {
    console.log("inside the betting method of gameplay.component");
    this.action = "bet";
    this.gameServ.betting(this.betAmount, this.action).subscribe(
      data => {
        console.log("betting: " + data);
      }
    );
  }

  calling() {
    console.log("inside the calling method of gameplay.component");
    this.action = "call";
    console.log(this.action);
    this.gameServ.calling(this.action).subscribe(
      data => {
        console.log("calling: " + data);
      }
    );
  }

  raising() {
    console.log("inside the raising method of gameplay.component");
    this.action = "raise";
    console.log(this.action);
    this.gameServ.raising(this.raiseAmount, this.action).subscribe(
      data => {
        console.log("raising: " + data);
      }
    );
  }

  folding() {
    console.log("inside the folding method of gameplay.component");
    this.action = "fold";
    this.gameServ.folding(this.action).subscribe(
      data => {
        console.log("folding: " + data);
      }
    );
  }

  
}
import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CredentialsService } from '../../services/credentials.service'
import { Router } from '@angular/router';
//import { GameSettingsComponent } from '../game-settings/game-settings.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  @Input() tableCards: any = [];
  @Input() handCards: any = [];
  i: number;

  constructor(
    private gameService: GameService,
    private credService: CredentialsService,
    private router: Router,
    //private gameSettings: GameSettingsComponent
    ) {}

  ngOnInit() {
    //this.tableCards = this.gameSettings.table;
    console.log("game hand cards: " + this.tableCards);
    //this.handCards = this.gameSettings.hand;
    console.log("game table cards: " + this.handCards);
  }

  getHand() {
    console.log("inside getHand method in table-container.component");
    this.gameService.getHand().subscribe(
      data => {
        console.log(data);
        for(this.i = 0; this.i < data.length; this.i += 1) {
          this.handCards[this.i] = data[this.i].image; 
        }
      }
    );
  }

  getFlop() {
    console.log("inside getFlop method in table-container.component");
    this.gameService.getFlop().subscribe(
      data => {
        console.log(data);
        for(this.i = 0; this.i < data.length; this.i += 1) {
          this.tableCards[this.i] = data[this.i].image; 
        }
      }
    );
  }

  getTurn() {
    console.log("inside getTurn method in table-container.component");
    this.gameService.getTurn().subscribe(
      data => {
        console.log(data);
        for(this.i = 0; this.i < data.length; this.i += 1) {
          this.tableCards[this.i] = data[this.i].image; 
        }
      }
    );
  }

  getRiver() {
    console.log("inside getRiver method in table-container.component");
    this.gameService.getRiver().subscribe(
      data => {
        console.log(data);
        for(this.i = 0; this.i < data.length; this.i += 1) {
          this.tableCards[this.i] = data[this.i].image; 
        }
      }
    );
  }

  cheat() {
    console.log("inside cheat method in table-container.component");
    this.gameService.cheat().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  logout() {
    console.log("inside the logout method in home.component");
    this.credService.logout().subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/TexasCheatum");
      }
    );
  }
}
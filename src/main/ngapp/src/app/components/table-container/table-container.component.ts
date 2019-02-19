import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CredentialsService } from '../../services/credentials.service'
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { MatDialog } from '@angular/material';
import { PauseMenuComponent } from '../pause-menu/pause-menu.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  private tableCards: any = [];
  private handCards: any = [];
  private game: any = {};
  private i: number;
  private lobbyView: boolean = true;
  private gameView: boolean = false;

  constructor(
    private gameService: GameService,
    private credService: CredentialsService,
    private router: Router,
    private settingServ: SettingsService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {}

  newGame() {
    console.log("inside the newGame method in table-container.component");
    this.settingServ.newGame().subscribe(
      data => {
          console.log(data);
          this.lobbyView = false;
          this.gameView = true;
      }
    );
  }

  joinGame() {
    console.log("inside joinGame method in table-container.component");
    this.settingServ.joinGame(this.game.sesh).subscribe(
      data => {
        console.log(data);
        this.lobbyView = false;
        this.gameView = true;

        for(this.i = 0; this.i < data.hand.length; this.i++) {
          this.handCards[this.i] = data.hand[this.i].image;
        }

        for(this.i = 0; this.i < data.table.length; this.i++) {
          this.tableCards[this.i] = data.table[this.i].image;
        }
      }
    );
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

  openPause() {
    const dialogRef = this.dialog.open(PauseMenuComponent);
  }
}
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CredentialsService } from '../../services/credentials.service'
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  private tableCards: any = [];
  private handCards: any = [];
  private game: any = {};
  private chart: any = {
    title: "Odds to Get Hand",
    type: "ColumnChart",
    data: null
  };
  private i: number;
  private lobbyView: boolean = true;
  private gameView: boolean = false;
  private pauseMenu: boolean = false;
  private visible: boolean = false;

  constructor(
    private gameService: GameService,
    private credService: CredentialsService,
    private router: Router,
    private settingServ: SettingsService,
    ) {}

  ngOnInit() {}

  newGame() {
    console.log("inside the newGame method in table-container.component");
    this.settingServ.newGame().subscribe(
      data => {
          console.log(data);
          this.lobbyView = false;
          this.gameView = true;
          this.getHand();
      }
    );

  }

  joinGame() {
    console.log("inside joinGame method in table-container.component");
    this.settingServ.joinGame(this.game.sesh).subscribe(
      data => {
        console.log(data);
        if(data !== null) {
          this.lobbyView = false;
          this.gameView = true;

          for(this.i = 0; this.i < data.hand.length; this.i++) {
            this.handCards[this.i] = data.hand[this.i].image;
          }

          for(this.i = 0; this.i < data.table.length; this.i++) {
            this.tableCards[this.i] = data.table[this.i].image;
          }
        }
        else {
          this.visible = true;
          this.lobbyView = true;
          this.gameView = false;
          this.game.sesh = "";
        }
      }
    );
  }

  // startGame() {
  //   console.log("inside startGame method in thable-container.component");
  //   this.gameService.startGame().subscribe();
  // }

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

  // getFlop() {
  //   console.log("inside getFlop method in table-container.component");
  //   this.gameService.getFlop().subscribe(
  //     data => {
  //       console.log(data);
  //       for(this.i = 0; this.i < data.length; this.i += 1) {
  //         this.tableCards[this.i] = data[this.i].image; 
  //       }
  //     }
  //   );
  // }

  // getTurn() {
  //   console.log("inside getTurn method in table-container.component");
  //   this.gameService.getTurn().subscribe(
  //     data => {
  //       console.log(data);
  //       for(this.i = 0; this.i < data.length; this.i += 1) {
  //         this.tableCards[this.i] = data[this.i].image; 
  //       }
  //     }
  //   );
  // }

  // getRiver() {
  //   console.log("inside getRiver method in table-container.component");
  //   this.gameService.getRiver().subscribe(
  //     data => {
  //       console.log(data);
  //       for(this.i = 0; this.i < data.length; this.i += 1) {
  //         this.tableCards[this.i] = data[this.i].image; 
  //       }
  //     }
  //   );
  // }

  cheat() {
    console.log("inside cheat method in table-container.component");
    this.gameService.cheat().subscribe(
      data => {
        console.log(data);
        this.chart.data = data;
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

  pause() {
    this.gameView = false;
    this.lobbyView = false;
    this.pauseMenu = true;
  }

  resume() {
    this.gameView = true;
    this.lobbyView = false;
    this.pauseMenu = false;
  }

  goBack() {
    window.history.back();
  }
}
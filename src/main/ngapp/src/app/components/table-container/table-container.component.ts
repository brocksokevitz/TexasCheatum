import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CredentialsService } from '../../services/credentials.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private credService: CredentialsService,
    private router: Router
    ) {}

  ngOnInit() {}

  getHand() {
    console.log("inside getHand method in table-container.component");
    this.gameService.getHand().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getFlop() {
    console.log("inside getFlop method in table-container.component");
    this.gameService.getFlop().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getTurn() {
    console.log("inside getTurn method in table-container.component");
    this.gameService.getTurn().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getRiver() {
    console.log("inside getRiver method in table-container.component");
    this.gameService.getRiver().subscribe(
      data => {
        console.log(data);
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
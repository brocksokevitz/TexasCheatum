import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {
  private game: any = {};
  private i: number;
  table: any = [];
  hand: any = [];

  constructor(
    private settingServ: SettingsService,
    private router: Router
    ) {}

  ngOnInit() {}

  newGame() {
    console.log("inside the newGame method in game-settings.component");
    this.settingServ.newGame().subscribe(
      data => {
          console.log(data);
          this.router.navigateByUrl("/table");
      }
    );
  }

  joinGame() {
    console.log("inside joinGame method in game-settings.component");
    this.settingServ.joinGame(this.game.sesh).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/table");
      }
    );
  }

  goBack() {
    window.history.back();
  }
}
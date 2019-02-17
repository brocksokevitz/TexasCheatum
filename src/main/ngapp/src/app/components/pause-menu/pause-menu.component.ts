import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause-menu',
  templateUrl: './pause-menu.component.html',
  styleUrls: ['./pause-menu.component.css']
})
export class PauseMenuComponent implements OnInit {
  display = "none";

  constructor() {}

  ngOnInit() {}

  open() {
    this.display = "block";
  }

  close() {
    this.display = "none";
  }
}

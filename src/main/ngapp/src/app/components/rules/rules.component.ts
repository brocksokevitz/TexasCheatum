import { Component, OnInit } from '@angular/core';
import { TableContainerComponent } from '../table-container/table-container.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(
    private table: TableContainerComponent
  ) { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
    this.table.resume();
  }
}

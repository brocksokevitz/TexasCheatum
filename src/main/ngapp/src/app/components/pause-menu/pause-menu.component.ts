import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../../services/credentials.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pause-menu',
  templateUrl: './pause-menu.component.html',
  styleUrls: ['./pause-menu.component.css']
})
export class PauseMenuComponent implements OnInit {
  display = "none";

  constructor(
    private router: Router,
    private credService: CredentialsService
  ) {}

  ngOnInit() {}

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

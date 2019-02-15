import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../../credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private credService: CredentialsService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  logout() {
    console.log("inside the logout method in home.component");
    this.credService.logout().subscribe(
      data => {
        if(data.status === 200) {
          this.router.navigateByUrl("/TexasCheatum");
        }
      }
    );
  }
}

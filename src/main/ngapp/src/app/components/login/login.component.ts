import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};

  constructor(
    private credService: CredentialsService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  login() {
    this.credService.login(this.credentials.username, this.credentials.password).subscribe(
      data => {
        if(data !== null) {
          this.router.navigateByUrl("/home");
        }
        else {
          this.router.navigateByUrl("/TexasCheatum")
        }
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credentials: any = {};
  private visible: boolean = false;

  constructor(
    private credService: CredentialsService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  login() {
    console.log("inside the login method in login.component");
    this.credService.login(this.credentials.username, this.credentials.password).subscribe(
      data => {
        if(data !== null) {
          console.log(data);
          this.router.navigateByUrl("/home");
        }
        else {
          this.visible = true;
          this.credentials.username = "";
          this.credentials.password = "";
        }
      }
    );
  }
}
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
  private isVisible: boolean;

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
          console.log(data.username);
          this.router.navigateByUrl("/home");
        }
        else if(data === ""){
          console.log(data);
          //this.router.navigateByUrl("/TexasCheatum")
          this.isVisible = true;
        }
      }
    );
  }
}

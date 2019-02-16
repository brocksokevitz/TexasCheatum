import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private credentials: any = {};

  constructor(
    private credService: CredentialsService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  register() {
    console.log("inside register method of register.component");
    this.credService.register(this.credentials.username, this.credentials.email, this.credentials.password)
      .subscribe(
        data => this.router.navigateByUrl("/TexasCheatum")
      );
  }

  goBack() {
    window.history.back();
  }
}

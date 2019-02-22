import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { TableCardsComponent } from './components/table-cards/table-cards.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    LoginComponent,
    HomeComponent,
    RulesComponent,
    OptionsMenuComponent,
    RegisterComponent,
    TableCardsComponent,
    PlayerHandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

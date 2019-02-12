import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { LoginComponent } from './components/login/login.component';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    LoginComponent,
    GameSettingsComponent,
    HomeComponent,
    RulesComponent,
    OptionsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

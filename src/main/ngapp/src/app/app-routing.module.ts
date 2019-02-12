import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { RulesComponent } from './components/rules/rules.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';

const routes: Routes = [
  {
    path: "ng",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "game-settings",
    component: GameSettingsComponent
  },
  {
    path: "table",
    component: TableContainerComponent
  },
  {
    path: "rules",
    component: RulesComponent
  },
  {
    path: "options",
    component: OptionsMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

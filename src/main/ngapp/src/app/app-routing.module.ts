import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { RulesComponent } from './components/rules/rules.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "TexasCheatum",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "table",
    component: TableContainerComponent
  },
  {
    path: "rules",
    component: RulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

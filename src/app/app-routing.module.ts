import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {CharactersListComponent} from './characters-list/characters-list.component';
import {AuthGuardService} from './services/auth-guard.service';
import {EncyclopediaComponent} from './encyclopedia/encyclopedia.component';
import {RacesListComponent} from './encyclopedia/races-list/races-list.component';
import {RaceComponent} from './encyclopedia/races-list/race/race.component';
import {ClassesListComponent} from './encyclopedia/classes-list/classes-list.component';
import {ClassComponent} from './encyclopedia/classes-list/class/class.component';
import {ItemsListComponent} from './encyclopedia/items-list/items-list.component';
import {ItemComponent} from './encyclopedia/items-list/item/item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'characters', canActivate: [AuthGuardService], component: CharactersListComponent },
  { path: 'encyclopedia', canActivate: [AuthGuardService], component: EncyclopediaComponent },
  { path: 'encyclopedia/classes', canActivate: [AuthGuardService], component: ClassesListComponent },
  { path: 'encyclopedia/classes/:name', canActivate: [AuthGuardService], component: ClassComponent },
  { path: 'encyclopedia/items', canActivate: [AuthGuardService], component: ItemsListComponent },
  { path: 'encyclopedia/items/:name', canActivate: [AuthGuardService], component: ItemComponent },
  { path: 'encyclopedia/races', canActivate: [AuthGuardService], component: RacesListComponent },
  { path: 'encyclopedia/races/:name', canActivate: [AuthGuardService], component: RaceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

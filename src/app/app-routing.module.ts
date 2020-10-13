import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ObjectListComponent} from './objects-view/object-list/object-list.component';
import {ObjectComponent} from './objects-view/object-list/object/object.component';
import {ObjectsViewComponent} from './objects-view/objects-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'characters', canActivate: [AuthGuardService], component: ObjectsViewComponent },
  { path: 'characters/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia', canActivate: [AuthGuardService], component: ObjectsViewComponent },
  { path: 'encyclopedia/armors', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/armors/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/classes', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/classes/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/items', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/items/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/races', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/races/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/skills', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/skills/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/spells', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/spells/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/talents', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/talents/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: 'encyclopedia/weapons', canActivate: [AuthGuardService], component: ObjectListComponent },
  { path: 'encyclopedia/weapons/:id', canActivate: [AuthGuardService], component: ObjectComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

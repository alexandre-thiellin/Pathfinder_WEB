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
import {ArmorsListComponent} from './encyclopedia/armors-list/armors-list.component';
import {ArmorComponent} from './encyclopedia/armors-list/armor/armor.component';
import {CharacterComponent} from './characters-list/character/character.component';
import {SkillsListComponent} from './encyclopedia/skills-list/skills-list.component';
import {SkillComponent} from './encyclopedia/skills-list/skill/skill.component';
import {SpellsListComponent} from './encyclopedia/spells-list/spells-list.component';
import {SpellComponent} from './encyclopedia/spells-list/spell/spell.component';
import {TalentsListComponent} from './encyclopedia/talents-list/talents-list.component';
import {TalentComponent} from './encyclopedia/talents-list/talent/talent.component';
import {WeaponsListComponent} from './encyclopedia/weapons-list/weapons-list.component';
import {WeaponComponent} from './encyclopedia/weapons-list/weapon/weapon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'characters', canActivate: [AuthGuardService], component: CharactersListComponent },
  { path: 'characters/:id', canActivate: [AuthGuardService], component: CharacterComponent },
  { path: 'encyclopedia', canActivate: [AuthGuardService], component: EncyclopediaComponent },
  { path: 'encyclopedia/armors', canActivate: [AuthGuardService], component: ArmorsListComponent },
  { path: 'encyclopedia/armors/:id', canActivate: [AuthGuardService], component: ArmorComponent },
  { path: 'encyclopedia/classes', canActivate: [AuthGuardService], component: ClassesListComponent },
  { path: 'encyclopedia/classes/:id', canActivate: [AuthGuardService], component: ClassComponent },
  { path: 'encyclopedia/items', canActivate: [AuthGuardService], component: ItemsListComponent },
  { path: 'encyclopedia/items/:id', canActivate: [AuthGuardService], component: ItemComponent },
  { path: 'encyclopedia/races', canActivate: [AuthGuardService], component: RacesListComponent },
  { path: 'encyclopedia/races/:id', canActivate: [AuthGuardService], component: RaceComponent },
  { path: 'encyclopedia/skills', canActivate: [AuthGuardService], component: SkillsListComponent },
  { path: 'encyclopedia/skills/:id', canActivate: [AuthGuardService], component: SkillComponent },
  { path: 'encyclopedia/spells', canActivate: [AuthGuardService], component: SpellsListComponent },
  { path: 'encyclopedia/spells/:id', canActivate: [AuthGuardService], component: SpellComponent },
  { path: 'encyclopedia/talents', canActivate: [AuthGuardService], component: TalentsListComponent },
  { path: 'encyclopedia/talents/:id', canActivate: [AuthGuardService], component: TalentComponent },
  { path: 'encyclopedia/weapons', canActivate: [AuthGuardService], component: WeaponsListComponent },
  { path: 'encyclopedia/weapons/:id', canActivate: [AuthGuardService], component: WeaponComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

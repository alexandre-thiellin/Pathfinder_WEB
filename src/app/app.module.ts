import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComponent } from './characters-list/character/character.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { EncyclopediaMenuComponent } from './encyclopedia/encyclopedia-menu/encyclopedia-menu.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {PathfinderApiService} from './services/pathfinder-api.service';
import {RacesService} from './services/races.service';
import { RacesListComponent } from './encyclopedia/races-list/races-list.component';
import { RaceComponent } from './encyclopedia/races-list/race/race.component';
import { ClassesListComponent } from './encyclopedia/classes-list/classes-list.component';
import { ClassComponent } from './encyclopedia/classes-list/class/class.component';
import { ItemsListComponent } from './encyclopedia/items-list/items-list.component';
import { ItemComponent } from './encyclopedia/items-list/item/item.component';
import {ClassesService} from './services/classes.service';
import {ItemsService} from './services/items.service';
import {CurrencyPPipe} from './pipes/currency.pipe';
import {WeightPipe} from './pipes/weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CharactersListComponent,
    CharacterComponent,
    EncyclopediaComponent,
    EncyclopediaMenuComponent,
    RacesListComponent,
    RaceComponent,
    ClassesListComponent,
    ClassComponent,
    ItemsListComponent,
    ItemComponent,
    CurrencyPPipe,
    WeightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PathfinderApiService,
    ClassesService,
    ItemsService,
    RacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

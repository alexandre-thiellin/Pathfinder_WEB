import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PathfinderApiService} from './services/pathfinder-api.service';
import {CurrencyPPipe} from './pipes/currency.pipe';
import {WeightPipe} from './pipes/weight.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './objects-view/menu/menu.component';
import {ObjectListComponent} from './objects-view/object-list/object-list.component';
import {ObjectComponent} from './objects-view/object-list/object/object.component';
import {ObjectsViewComponent} from './objects-view/objects-view.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CurrencyPPipe,
    WeightPipe,
    MenuComponent,
    ObjectListComponent,
    ObjectComponent,
    ObjectsViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PathfinderApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

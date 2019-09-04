import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from './login/input/input.component';
import { SideNavComponent } from './index/side-nav/side-nav.component';
import { HeaderComponent } from './index/header/header.component';
import { TittleComponent } from './index/tittle/tittle.component';
import { ButtonRequestComponent } from './index/button-request/button-request.component';
import { SearchBarComponent } from './index/search-bar/search-bar.component';
import { HistoricComponent } from './index/historic/historic.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    PageNotFoundComponent,
    InputComponent,
    SideNavComponent,
    HeaderComponent,
    TittleComponent,
    ButtonRequestComponent,
    SearchBarComponent,
    HistoricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

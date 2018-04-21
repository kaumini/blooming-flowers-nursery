import { ParentAuthGuard } from './parent-auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { CareersComponent } from './careers/careers.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { ParentportalComponent } from './parentportal/parentportal.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    CarouselComponent,
    CareersComponent,
    AdminportalComponent,
    ParentportalComponent,
    AccessdeniedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'login' , component : LoginComponent},
      { path : 'about', component : AboutComponent},
      { path : 'apply', component : RegistrationComponent},
      { path : 'careers', component : CareersComponent},
      { path : 'portal/admin', component : AdminportalComponent , canActivate : [AuthGuard, AdminAuthGuard]},
      { path : 'portal/parent', component : ParentportalComponent , canActivate : [AuthGuard, ParentAuthGuard]},
      { path : 'accessdenied', component : AccessdeniedComponent}
    ]),
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuard,
    AdminAuthGuard,
    ParentAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

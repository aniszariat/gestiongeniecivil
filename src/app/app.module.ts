import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MasterheadComponent } from './masterhead/masterhead.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { CurrentporjComponent } from './currentporj/currentporj.component';
import { RealizedProjComponent } from './realized-proj/realized-proj.component';
import { TeamComponent } from './team/team.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterheadComponent,
    OurservicesComponent,
    OurservicesComponent,
    CurrentporjComponent,
    RealizedProjComponent,
    TeamComponent,
    CustomersComponent,
    ContactComponent,
    ProjectsDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

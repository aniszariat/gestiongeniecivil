import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrentporjComponent } from './currentporj/currentporj.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: NavbarComponent },
      { path: '', component: OurservicesComponent },
      { path: '', component: CurrentporjComponent },
      { path: '', component: CustomersComponent },
      { path: '', component: TeamComponent },
      { path: 'ProjectsDetails/:id', component: ProjectsDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

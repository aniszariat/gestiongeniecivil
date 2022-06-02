import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontService } from '../front.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
  realizedProjects: Project[]
  Proj:Project
  constructor(private service : FrontService,private activatedRoute : ActivatedRoute) {
    this.realizedProjects  = service.realizedProjectsList
  }
  ngOnInit(): void {
    this.Proj = this.service.filtreProj(this.activatedRoute.snapshot.params['id'],this.realizedProjects) 
    console.log('Proj',this.Proj,'\n id =',this.activatedRoute.snapshot.params['id']);
    
  }

}

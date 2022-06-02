import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-realized-proj',
  templateUrl: './realized-proj.component.html',
  styleUrls: ['./realized-proj.component.css']
})
export class RealizedProjComponent implements OnInit {
  realizedProjects:Project[]
  constructor(service : FrontService) {
    this.realizedProjects  = service.realizedProjectsList
    console.log(this.realizedProjects);
    
   }

  ngOnInit(): void {
  }

  switchparity(proj){
    return {'timeline-inverted': this.realizedProjects.indexOf(proj) %2 == 0  ? true : false,
  }

    
  }

}

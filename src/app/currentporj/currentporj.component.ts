import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-currentporj',
  templateUrl: './currentporj.component.html',
  styleUrls: ['./currentporj.component.css']
})
export class CurrentporjComponent implements OnInit {
  currentProjects:Project[]
  constructor(s : FrontService) {
    this.currentProjects = s.currentPorjectsList
    console.log(this.currentProjects[0])
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamList:team[]
  constructor(service : FrontService) {
    this.teamList=service.teamMembers
   }

  ngOnInit(): void {
  }

}

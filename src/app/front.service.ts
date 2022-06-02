import { Injectable } from '@angular/core';
import { activity } from './models/activity';
import { Project } from './models/Project';
import { team } from './models/team';

@Injectable({
  providedIn: 'root',
})
export class FrontService {
  navbarItems: string[] = ['ACTIVITES', 'CURRENT PROJECTS', 'REALIZED PROJECTS', 'TEAM', 'CONTACT'];
  ourservicesList:activity[] = [
    new activity('Building','Construction of new modern buildings and renewal of existing building for office and residential use',
    'fa-shopping-cart'),
    //'fas fa-shopping-cart fa-stack-1x fa-inverse'),
    new activity('Bridges','Construction of all types of bridges, underpasses and overpasses',
    'fa-laptop'),
    //'fas fa-laptop fa-stack-1x fa-inverse'),
    new activity('Roads','New Roads Construction including farm track, single & dual Roadways, Motorways, Highways and Urban Roads, existing Roads reinforcement &rehabilitation',
    'fa-lock'),
    //'fas fa-lock fa-stack-1x fa-inverse'),
    new activity('Earthworks','Excavation, embankment and cuttings works, levelling and compacting any type of soil',
    'fa-lock'),
    //'fas fa-lock fa-stack-1x fa-inverse'),    
  ];
  public currentPorjectsList:Project[]=[
    new Project(1,'current project1','TunisAir','building',new Date(2020,8,6),new Date(2022,8,9),'','1.jpg'),
    new Project(2,'current project2','TunisAir','building',new Date(2021,8,12),new Date(2024,4,16),'','2.jpeg'),
    new Project(3,'current project3','TunisAir','building',new Date(2022,1,29),new Date(2026,7,19),'','3.jpg'),
  ]

  teamMembers : team[]=[
    new team('Parveen Anand','Lead Designer','1.jpg'),
    new team('Diana Petersen','Lead Marketer','2.jpg'),
    new team('Larry Parker','Lead Developer','3.jpg'),
  ]



  realizedProjectsList:Project[]=[
    new Project(1,'realized project1','TunisAir','building',new Date(2019,10,5),new Date(2021,1,6),'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis','1.png'),
    new Project(2,'realized project2','TunisAir','building',new Date(2018,4,23),new Date(2020,8,16),'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis','2.png'),
    new Project(3,'realized project3','TunisAir','building',new Date(2017,10,6),new Date(2020,10,26),'some details about this project,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis','3.jpg'),
  
  ]
  constructor() {}

  filtreProj(id,projArray){
    return projArray.find(p=>p._id==id)
  }
}

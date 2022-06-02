import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {
  serviceslist

  constructor(service: FrontService) {
    this.serviceslist = service.ourservicesList
   }

  ngOnInit(): void {
  }

}

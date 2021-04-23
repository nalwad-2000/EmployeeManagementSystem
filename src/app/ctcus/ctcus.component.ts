import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-ctcus',
  templateUrl: './ctcus.component.html',
  styleUrls: ['./ctcus.component.css']
})
export class CtcusComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    this.headerService.setTitle("Contact Us");
  }

  ngOnInit() {

  }

}

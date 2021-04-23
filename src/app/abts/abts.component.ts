import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-abts',
  templateUrl: './abts.component.html',
  styleUrls: ['./abts.component.css']
})
export class AbtsComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    this.headerService.setTitle('About Us');
  }

  ngOnInit() {

  }

}

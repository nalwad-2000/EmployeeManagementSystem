import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = '';

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });
  }

}

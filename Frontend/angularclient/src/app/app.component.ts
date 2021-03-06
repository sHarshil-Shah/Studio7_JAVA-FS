import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from './services/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router, private navbarService: ToolbarService
  ) {

  }
  ngOnInit(): void {
    this.links = this.navbarService.getLinks();
    console.log(this.links);
  }

}

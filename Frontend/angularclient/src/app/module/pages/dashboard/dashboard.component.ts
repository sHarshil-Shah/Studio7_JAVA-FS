import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contents: Content[] | undefined;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }
}

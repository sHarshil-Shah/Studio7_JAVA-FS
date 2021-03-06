import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }

}

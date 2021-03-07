import { Component, OnInit} from '@angular/core';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService, private router: Router,) { }

  ngOnInit(): void {
    this.getData();
  }


  goToAdd() {
    this.router.navigate(['contents/add']);

  }

  getData() {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }
  delete(id: number) {
    this.contentService.delete(id).subscribe();
    alert('Content Deleted!');
    this.getData();
  }

  update(id: number) {
    Globals.contentId = id;

    this.router.navigate(['contents/update']);

  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }

  openDialog(link: string | undefined): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      // width: '2000px',
      data: { link: 'assets/1.mp4' }
    });

  }
}
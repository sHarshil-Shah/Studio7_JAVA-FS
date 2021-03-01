import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contents: Content[] | undefined;

  constructor(private contentService: ContentService, public dialog: MatDialog) { }

  openDialog(link: string | undefined): void {
    const dialogRef = this.dialog.open(VideoComponent, {
      // width: '2000px',
      data: { link: 'assets/1.mp4' }
    });

    // dialogRef.afterClosed().subscribe(res => {
    //   this.color = res;
    // });
  }


  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
    });
  }
}

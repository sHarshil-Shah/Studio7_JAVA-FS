import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { Content } from 'src/app/model/content';
import { User } from 'src/app/model/user';
import { ContentService } from 'src/app/service/content.service';
import { UserService } from 'src/app/service/user.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];
  oriContent: Content[] = [];

  actionContents: Content[] = [];
  oriActionContent: Content[] = [];

  dramaContents: Content[] = [];
  oriDramaContent: Content[] = [];

  name: string = "";
  constructor(private contentService: ContentService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
      this.oriContent = data;

      this.oriActionContent = this.oriContent.filter(res => {
        return res.genere?.toLocaleLowerCase().match("action");
      })

      this.actionContents = this.oriActionContent;

      this.oriDramaContent = this.oriContent.filter(res => {
        return res.genere?.toLocaleLowerCase().match("drama");
      })

      this.dramaContents = this.oriDramaContent;
    });
  }

  openDialog(link: string | undefined): void {

    console.log(link);
    const dialogRef = this.dialog.open(VideoComponent, {
      // width: '2000px',
      data: { link: 'assets/' + link + '.mp4' }
    });

  }

  search() {
    if (this.name == "") this.ngOnInit();
    else {
      this.contents = this.oriContent.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })

      this.actionContents = this.oriActionContent.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })

      this.dramaContents = this.oriDramaContent.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  watchlist(id: Number = 0): void {
    let user: User;
    this.userService.findByEmail(Globals.email).subscribe(result => {
      user = result;
      this.contentService.findById(id).subscribe(content => {

        this.userService.addContent(user, content).subscribe();
      });
    });

  }
}
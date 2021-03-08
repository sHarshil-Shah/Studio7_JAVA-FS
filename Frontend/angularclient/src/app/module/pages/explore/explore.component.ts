import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  contents: Content[] = [];
  oriContents: Content[] = [];

  languages: string[];
  generes: string[];
  selectedLanguages: string[] = [];
  selectedGeneres: string[] = [];

  constructor(public dialog: MatDialog, private contentService: ContentService) {
    this.languages = Globals.languages;
    this.generes = Globals.generes;
  }

  ngOnInit(): void {
    this.contentService.findAll().subscribe(data => {
      this.contents = data;
      this.oriContents = data;
    });
  }

  openDialog(link: string | undefined): void {

     console.log(link);
    const dialogRef = this.dialog.open(VideoComponent, {
      // width: '2000px',
      data: { link: 'assets/' + link + '.mp4' }
    });

  }


  clickedOption() {
    let selLan: string[] = this.selectedLanguages;
    let selGen: string[] = this.selectedGeneres;

    if (selLan.length == 0 && selGen.length == 0) {
      this.ngOnInit();
    } else if (selLan.length == 0) {
      this.contents = this.oriContents.filter(res => {
        return selGen.includes(res.genere);
      })
    } else if (selGen.length == 0) {
      this.contents = this.oriContents.filter(res => {
        return selLan.includes(res.language);
      })
    } else {
      this.contents = this.oriContents.filter(res => {
        return selLan.includes(res.language) && selGen.includes(res.genere);
      })
    }
  }

}

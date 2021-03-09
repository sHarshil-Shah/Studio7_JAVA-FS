import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  name: string = "";
  genere: string = "";
  language: string = "";
  discription: string = "";
  cast: string = "";
  rating: number = 0;
  contentLink: string = '';
  constructor(
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public link: any,
  ) { }

  vidlink: string = "";
  ngOnInit(): void {
    this.vidlink = this.link['link'];
    this.name = this.link['Content'].name;
    this.genere = this.link['Content'].genere;
    this.language = this.link['Content'].language;
    this.discription = this.link['Content'].discription;
    this.cast = this.link['Content'].cast;
    this.rating = this.link['Content'].rating;
    this.contentLink = this.link['Content'].contentLink;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMail() {

  } @ViewChild('video')

  public video!: ElementRef;



  playMovie() {
    // this.vidlink = "assets/"+this+"1.mp4";
    this.video.nativeElement.src = "assets/" + this.contentLink + ".mp4";
    this.video.nativeElement.load();
    this.video.nativeElement.play();
  }

  giveRating() {

  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public link: any,
  ) { }

  vidlink: string = "";
  ngOnInit(): void {
    this.vidlink = this.link['link'];

    console.log(this.vidlink);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMail() {

  }
}

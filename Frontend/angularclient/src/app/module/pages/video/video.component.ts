import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { Rating } from 'src/app/model/rating';
import { ContentService } from 'src/app/service/content.service';
import { RatingService } from 'src/app/service/rating.service';
import { UserService } from 'src/app/service/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  rating: any = 0;
  contentLink: string = '';

  ratingForm = new FormGroup({
    rating: new FormControl('', [Validators.required]),
  });


  shareForm = new FormGroup({
    EmailId: new FormControl('', [Validators.email, Validators.required]),
  });



  constructor(
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public link: any,
    private ratingService: RatingService,
    private userService: UserService,
    private contentService: ContentService,
    private http: HttpClient,

  ) { }

  vidlink: string = "";
  ngOnInit(): void {
    this.vidlink = this.link['link'];;
    this.name = this.link['Content'].name;
    this.genere = this.link['Content'].genere;
    this.language = this.link['Content'].language;
    this.discription = this.link['Content'].discription;
    this.cast = this.link['Content'].cast;
    //this.rating = this.link['Content'].rating;
    this.contentLink = this.link['Content'].contentLink;

    this.getRating();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  sendmail() {
    let emailid = this.shareForm.get('EmailId');
    if (emailid?.valid) {
      this.userService.sendMail(emailid?.value, this.link['Content'].name).subscribe(res => {
        alert('Recommandation Email has been sent to ' + emailid?.value);
      });

    }
    else {
      alert('Please enter an email ID.');
    }
  }
  @ViewChild('video')

  public video!: ElementRef;



  playMovie() {
    // this.vidlink = "assets/"+this+"1.mp4";
    this.video.nativeElement.src = "assets/" + this.contentLink + ".mp4";
    this.video.nativeElement.load();
    this.video.nativeElement.play();
  }
  cRating: Rating = new Rating;
  giveRating() {
    this.cRating.rating = this.ratingForm.get('rating')?.value;
    this.cRating.user.id = Globals.userId;
    this.cRating.content.id = this.link['Content'].id;
    if (this.ratingForm.get('rating')?.valid) {
      this.ratingService.save(this.cRating).subscribe();
      alert('You rated: ' + this.cRating.rating);
    }
    else {
      alert('Enter rating between 0-5');
    }
  }

  getRating() {
    this.ratingService.getRating(this.link['Content'].id).subscribe(rating => {
      this.rating = rating;
    }, error => console.log('oops', error)
    );
  }
}

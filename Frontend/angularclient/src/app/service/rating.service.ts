import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';
import { Rating } from '../model/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratingsUrl: string;

  constructor(private http: HttpClient) {
    this.ratingsUrl = 'http://localhost:8080/ratings';
  }


  public save(rating: Rating) {
    return this.http.post(this.ratingsUrl, rating);

  }

  public getRating(contentID: number) {
    return this.http.get(this.ratingsUrl + "/content/" + contentID);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../model/content';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {

  private contentsUrl: string;

  constructor(private http: HttpClient) {
    this.contentsUrl = 'http://localhost:8080/contents';
  }

  public findAll(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentsUrl);
  }

  public save(content: Content) {
    return this.http.post<Content>(this.contentsUrl, content);
  }
}
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

  public findById(id: Number): Observable<Content> {
    return this.http.get<Content>(this.contentsUrl + "/" + id);
  }

  public save(content: Content) {
    console.log(content);
    return this.http.post<Content>(this.contentsUrl, content);
  }

  public delete(contentId: number) {

    return this.http.delete(this.contentsUrl + "/" + contentId);
  }
}

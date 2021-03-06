import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Content } from '../model/content';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    console.log(user);
    return this.http.post<User>(this.usersUrl, user);
  }

  public addContent(user: User, content: Content) {
   // user.watchList?.push(content);
    return this.http.post(this.usersUrl+"/updateUser", { 'user': user, 'content': content });
  }

  public findByEmail(email: String) {
    return this.http.get<User>(this.usersUrl + '/email/' + email);
  }
}

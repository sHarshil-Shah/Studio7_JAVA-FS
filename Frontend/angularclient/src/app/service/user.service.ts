import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Content } from '../model/content';
import { catchError } from 'rxjs/operators';
import { Globals } from '../global';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://65.1.105.69:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    console.log(user);
    return this.http.post<User>(this.usersUrl, user).pipe(

      catchError(async (err) => alert("User with the Email already exists!"))

    );

  }
  public sendMail(email: string, message: string) {
    return this.http.post(this.usersUrl + "/sendmail/" + email, message);
  }

  public addContent(user: User, content: Content) {
    // user.watchList?.push(content);
    console.log(content.id);
    return this.http.post(this.usersUrl + "/updateUser", { 'userID': user.id, 'contentID': content.id });
  }

  public findByEmail(email: String) {
    return this.http.get<User>(this.usersUrl + '/email/' + email);
  }
}

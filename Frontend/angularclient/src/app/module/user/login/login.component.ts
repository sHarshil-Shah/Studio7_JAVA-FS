import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(
    private router: Router,
    private userService: UserService) {

  }

  onSubmit() {

    const email = this.loginForm.get('email');
    const pass = this.loginForm.get('pass');

    if (email && pass) {

      console.log("here");
      this.userService.findByEmail(email.value).subscribe(result => {
        if (result.pass == pass.value) {
          Cookie.set('isLoggedIn', 'true');
          if (result.admin) {
            Cookie.set('isAdmin', 'true');
            this.gotoUserList();
          } else {
            Cookie.set('isAdmin', 'false');
            this.gotoAddUser();
          }
        }
      });
    }

  }
  gotoUserList() {
    this.router.navigate(['/users/list']);
  }

  gotoAddUser() {
    this.router.navigate(['/users/add']);
  }
}

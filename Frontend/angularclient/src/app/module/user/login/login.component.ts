import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
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
          if (result.admin) {
            this.gotoUserList();
          } else {
            this.gotoAddUser();
          }
        }
      });
    }

  }
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  gotoAddUser() {
    this.router.navigate(['/users/add']);
  }
}

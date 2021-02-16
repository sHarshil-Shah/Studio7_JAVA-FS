import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { GlobalConstants } from 'src/app/service/global';

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
    console.log(GlobalConstants.isAdmin);
    GlobalConstants.isAdmin = true;
    console.log(GlobalConstants.isAdmin);
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

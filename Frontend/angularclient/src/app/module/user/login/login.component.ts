import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Globals } from 'src/app/global';
import { ToolbarService } from 'src/app/services/toolbar.service';

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
    private userService: UserService,
    private navbarService: ToolbarService,
  ) {
    this.navbarService.updateLoginStatus();
  }

  onSubmit() {

    const email = this.loginForm.get('email');
    const pass = this.loginForm.get('pass');

    if (email && pass) {

      this.userService.findByEmail(email.value).subscribe(result => {
        if (result.pass == pass.value) {
          if (result.country)
            Globals.country = result.country;
          if (result.email)
              Globals.email = result.email;
            console.log("Login:" + Globals.email);
          if (result.admin) {
            this.navbarService.updateNavAfterAuth(true);

            this.gotoUserList();
          } else {
            this.navbarService.updateNavAfterAuth(false);
            this.gotoDashboard();
          }
        }

      });
    }

  }
  gotoUserList() {
    this.router.navigate(['/users/list']);
  }

  gotoDashboard() {
    this.router.navigate(['/pages/dashboard']);
  }
}

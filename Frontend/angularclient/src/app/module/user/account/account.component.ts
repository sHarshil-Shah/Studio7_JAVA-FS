import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from 'src/app/global';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  contries: string[] = [];
  accountForm = new FormGroup({
    email: new FormControl({ value: '', disabled: true }),
    password: new FormControl(''),
    newpassword: new FormControl(''),
    newpasswordconfirm: new FormControl(''),
    country: new FormControl(''),
  });
  constructor(private userService: UserService) { this.contries = Globals.contries; }

  ngOnInit(): void {
    this.accountForm.patchValue({
      email: Globals.email,
      country: Globals.country,
    });
  }

  updateUser() {

    const oldPass = this.accountForm.get('password');

    const newPass = this.accountForm.get('newpassword');
    const confirmNewPass = this.accountForm.get('newpasswordconfirm');
    const country = this.accountForm.get('country');

    this.userService.findByEmail(Globals.email).subscribe(user => {
      if (oldPass && newPass && confirmNewPass && country) {
        if (user.pass == oldPass.value && newPass.value == confirmNewPass.value) {
          user.pass = newPass.value;
          user.country = country.value;

          this.userService.save(user).subscribe();

        }
      }
    });
  }

}

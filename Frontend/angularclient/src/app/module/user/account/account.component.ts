import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  contries: string[] = [];
  accountForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    newpassword: new FormControl(''),
    newpasswordconfirm: new FormControl(''),
    country: new FormControl(''),
  });
  constructor() { this.contries = Globals.contries; }

  ngOnInit(): void {

    console.log("Email: " + Globals.email);

    this.accountForm.patchValue({
      email: Globals.email,
      country: Globals.country,
    });
  }

}

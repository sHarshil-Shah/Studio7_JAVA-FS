import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Globals } from 'src/app/global';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    admin: new FormControl(''),
  });

  user: User;
  hide = true;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  options: FormGroup;
  checked = true;
  isAdmin: boolean;


  contries: string[] = [];
  constructor(fb: FormBuilder,
    private router: Router,
    private userService: UserService, public globals: Globals,
    public navbarService: ToolbarService,
  ) {
    this.contries = Globals.contries;
    this.user = new User();
    this.isAdmin = this.navbarService.isAdmin();
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  onSubmit() {

    const email = this.addUserForm.get('email');
    const pass = this.addUserForm.get('pass');
    const country = this.addUserForm.get('country');
    const admin = this.addUserForm.get('admin');


    if (email?.valid && pass?.valid && country?.valid && admin) {
      this.user.email = email.value;
      this.user.pass = pass.value;
      this.user.country = country.value;
      if (admin.value == true) {
        this.user.admin = true;
      }
      this.userService.save(this.user).subscribe(result => this.gotoUserList());
    } else {
      alert('One or more fields required');
    }

  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }


}
